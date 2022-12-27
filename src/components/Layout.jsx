import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar';
import { Suspense } from 'react';
import { Box, Divider } from '@chakra-ui/layout';
import Footer from './Footer';
import { useColorModeValue } from '@chakra-ui/react';

export const Layout = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <>
      <AppBar />
      <Divider />
      <Box as="main" flex={'1 1 auto'} bg={bgColor}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
      <Divider />
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
