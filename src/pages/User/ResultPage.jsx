import React from 'react';
import { Container, Heading, Box, Text, useColorModeValue } from '@chakra-ui/react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const ResultPage = () => {
  // Sample data for results
  const subjects = ['Math', 'Science', 'English', 'History', 'Geography'];
  const marks = [80, 75, 85, 70, 90];
  const totalMarks = [100, 100, 100, 100, 100];

  // Gradient colors based on color mode
  const gradientColors = useColorModeValue(
    'linear(to-b, teal.300, teal.500)',
    'linear(to-b, cyan.800, purple.800)'
  );

  // Background color based on color mode
  const bgColor = useColorModeValue('white', 'gray.800');

  // Sample improvement data
  const improvements = [
    'Improve communication skills',
    'Work on time management',
    'Practice problem-solving techniques',
    'Enhance subject knowledge',
    'Improve confidence in interviews',
  ];

  return (
    <>
    <Navbar />
    
    <Box bgGradient={gradientColors} minH="100vh" py="8">
      <Container maxW="container.lg">
        <Heading as="h1" mb="8" fontSize="3xl" color="blue.500" textAlign="center">
          Result Page
        </Heading>
        <Box bg={bgColor} p="6" borderRadius="md" boxShadow="lg" mb="8">
          {subjects.map((subject, index) => (
            <Box key={index} mb="4">
              <Text fontSize="lg" fontWeight="bold" color="blue.500">{subject}</Text>
              <Box bg="gray.200" h="2rem" borderRadius="md">
                <Box bg="blue.500" h="100%" width={`${(marks[index] / totalMarks[index]) * 100}%`} borderRadius="md" />
              </Box>
              <Text mt="2" fontSize="md">{`${marks[index]} / ${totalMarks[index]}`}</Text>
            </Box>
          ))}
        </Box>
        <Box bg={bgColor} p="6" borderRadius="md" boxShadow="lg">
          <Heading as="h2" mb="4" fontSize="2xl" color="blue.500">Improvement</Heading>
          {improvements.map((improvement, index) => (
            <Text key={index} mb="2">{improvement}</Text>
          ))}
        </Box>
      </Container>
    </Box>
    
    <Footer />
    </>
  );
};

export default ResultPage;
