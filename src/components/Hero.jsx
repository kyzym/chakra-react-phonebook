import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import { HeroSignButtons } from './Buttons';

export default function Hero() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          as={'h1'}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Contact book{' '}
          <Text as={'span'} color={'blue.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Using the contact book has never been so easy. You can add contacts,
          see contacts and even delete them. With this app, you’ll be the god of
          the contact book.
        </Text>
        <HeroSignButtons />
      </Stack>
    </Container>
  );
}
