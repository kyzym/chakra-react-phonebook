import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import Footer from './Footer/Footer';
import { Divider } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Divider />
      <Footer />
    </div>
  );
};
