import { Box } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';
import CallToActionWithIllustration from 'components/Hero';

export default function Home() {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  return (
    <Box as="section" className="home" bg={bgColor}>
      <CallToActionWithIllustration />
    </Box>
  );
}
