import { Box } from '@chakra-ui/layout';

export default function Home() {
  return (
    <Box as="section" className="home">
      <h1>
        Contact manager welcome page
        <span role="img" aria-label="Greeting icon">
          💁
        </span>
      </h1>
    </Box>
  );
}
