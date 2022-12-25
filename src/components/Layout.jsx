import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar';
import { Suspense } from 'react';
import { Box, Divider } from '@chakra-ui/layout';
import Footer from './Footer/Footer';

export const Layout = () => {
  return (
    <Box name="LayoutWrapper">
      <AppBar />
      <Divider />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Divider />
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};
