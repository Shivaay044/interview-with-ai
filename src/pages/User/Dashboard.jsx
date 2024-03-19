import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  Divider,
  useColorModeValue,
  SimpleGrid,
  Card

} from '@chakra-ui/react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { HiOutlineMail } from 'react-icons/hi';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';
import { AiOutlineLike, AiOutlineEye } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';


let priviousinterviewdata=[
  {
    interviewer: 'Jane Smith',
    date: 'March 5, 2024',
    time: '10:00 AM',
    status: 'Completed',
  },
  {
    interviewer: 'Alice Johnson',
    date: 'February 28, 2024',
    time: '3:30 PM',
    status: 'Completed',
  },
]


const StatsWithIcons = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5} mt={6} mb={4}>
        {priviousinterviewdata.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

const Dashboard = () => {
  const [interviewDetails, setInterviewDetails] = useState({
    interviewer: 'John Doe',
    date: 'March 10, 2024',
    time: '2:00 PM',
    status: 'Scheduled',
  });

  const [previousInterviews, setPreviousInterviews] = useState(priviousinterviewdata);


  const dispatch=useDispatch()

  const interviewdata=useSelector((store)=>store.interviewReducer)

  console.log(interviewdata)

  const handleStartInterview = () => {
    
    console.log('Interview started');
    

  };

  const handleViewDetails = (interview) => {
    console.log('View interview details:', interview);
  };

  const cardBgColor = useColorModeValue('white', 'gray.800');
  const cardBorderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <>
      <Navbar />
      <motion.div whileHover={{ translateY: -5 }}>
      <Box bg="gray.200" minH="100vh" py="8" mt={"1px"}>
        <Container maxW="container.lg">
          <VStack align="start" spacing="6">
            <Heading as="h1" fontSize="3xl" color="blue.500">
              User Dashboard
            </Heading>
            <Box borderWidth="1px" borderRadius="lg" p="4" bg={cardBgColor} borderColor={cardBorderColor} w="100%">
              <Heading as="h2" size="md" mb="2" color="blue.500">
                Interview Details
              </Heading>
              <Text mb="2">
                <strong>Interviewer:</strong> {interviewDetails.interviewer}
              </Text>
              <Text mb="2">
                <strong>Date:</strong> {interviewDetails.date}
              </Text>
              <Text mb="2">
                <strong>Time:</strong> {interviewDetails.time}
              </Text>
              <Text mb="2">
                <strong>Status:</strong> {interviewDetails.status}
              </Text>
            </Box>
            <Flex justifyContent="space-between" alignItems="center" w="100%">
              <Button colorScheme="blue" onClick={handleStartInterview}>
                Start Interview
              </Button>
              {/* <Button colorScheme="teal" onClick={() => handleViewDetails(previousInterviews)}>
                Details
              </Button> */}
            </Flex>
            <Divider w="100%" />
            <VStack align="stretch" spacing="4" w="100%">
              <Heading as="h2" size="md" mb="2" color="blue.500">
                Previous Interviews
              </Heading>
              {previousInterviews.map((interview, index) => (
                <Flex
                  key={index}
                  bg={cardBgColor}
                  borderWidth="1px"
                  borderRadius="lg"
                  p="4"
                  alignItems="center"
                  justifyContent="space-between"
                  borderColor={cardBorderColor}
                  w="100%"
                >
                  <VStack align="start" spacing="2">
                    <Text>
                      <strong>Interviewer:</strong> {interview.interviewer}
                    </Text>
                    <Text>
                      <strong>Date:</strong> {interview.date}
                    </Text>
                    <Text>
                      <strong>Time:</strong> {interview.time}
                    </Text>
                    <Text>
                      <strong>Status:</strong> {interview.status}
                    </Text>
                  </VStack>
                  <Button colorScheme="teal" onClick={() => handleViewDetails(interview)}>
                    Details
                  </Button>
                </Flex>
              ))}
            </VStack>
          </VStack>
        </Container>
      </Box>
      </motion.div>
      <Footer />
    </>
  );
};

export default Dashboard;
