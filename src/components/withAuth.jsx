'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const accessToken = Cookies.get('access_token');
      console.log(accessToken)
      if (!accessToken) {
        router.push('/login');
      }
    }, []);
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;