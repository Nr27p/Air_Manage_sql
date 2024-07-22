import { useRouter } from 'next/router';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');

    // Redirect to the sign-in page
    router.push('/signin');
  };

  return (
    <button onClick={handleLogout} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
      Logout
    </button>
  );
};

export default LogoutButton;
