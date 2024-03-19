import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const testimonialData = [
  {
    heading: 'Excellent Communication Skills',
    text: 'The candidate demonstrated excellent communication skills during the interview. Clear and concise articulation of ideas.',
    name: 'Alex Johnson',
    title: 'Senior Developer',
    src: 'https://images.unsplash.com/photo-1546525848-2c3f13958129?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDF8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
  {
    heading: 'Strong Problem-Solving Ability',
    text: 'Impressive problem-solving ability demonstrated during the interview. Analyzed complex scenarios effectively.',
    name: 'Sarah Chen',
    title: 'Product Manager',
    src: 'https://images.unsplash.com/photo-1534836477205-d56e14f0e1d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDF8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
  {
    heading: 'Great Team Collaboration',
    text: 'The candidate exhibited great teamwork skills during the AI-assisted interview. Actively participated and supported colleagues.',
    name: 'Chris Thompson',
    title: 'Project Lead',
    src: 'https://images.unsplash.com/photo-1545167622-f462b0b59b6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDF8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
];


const Testimonials = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          {testimonialData.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

const Testimonial = ({ heading, text, src, name, title }) => {
  return (
    <TestimonialContent>
      <TestimonialHeading>{heading}</TestimonialHeading>
      <TestimonialText>{text}</TestimonialText>
      <TestimonialAvatar src={src} name={name} title={title} />
    </TestimonialContent>
  );
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default Testimonials;
