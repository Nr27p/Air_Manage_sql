import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const router = useRouter();
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    useEffect(() => {
      if (!token) {
        router.push('/signin');
      } else {
        try {
          // Verify token on client-side (optional, can be server-side only)
          jwt.verify(token, 'Nimish@27'); // Use client-side verification or remove this
        } catch (error) {
          router.push('/signin');
        }
      }
    }, [router, token]);

    if (!token) {
      return <p>Loading...</p>; // Return a loading spinner or placeholder while checking authentication
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
