import { GetServerSideProps } from 'next';
import jwt from 'jsonwebtoken';

const ProtectedPage = ({ user }: { user: any }) => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {user.firstName} {user.lastName}!</p>
      {/* Include your LogoutButton here */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const token = req.cookies.token; // Make sure token is correctly accessed from cookies

  if (!token) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'Nimish@27');
    return {
      props: {
        user: {
          firstName: decoded.firstName,
          lastName: decoded.lastName,
        },
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }
};

export default ProtectedPage;
