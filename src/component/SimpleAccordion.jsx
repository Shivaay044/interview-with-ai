import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  AccordionIcon,
  Box,
  Heading,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

export default function SimpleAccordion() {
  const feedbackItems = [
    {
      title: 'AI Analyzed Feedback',
      content: 'Get detailed interview feedback that provides you insights on your skills and feedback for every question answered.',
    },
    {
      title: 'AI Analyzed Feedback Post Interview Completion',
      content: 'Suggested answers to help you learn and improvise.',
    },
    {
      title: 'Get Access to Interview Recordings',
      content: 'Done! You can now access interview recordings.',
    },
    {
      title: 'Performance Metrics Overview',
      content: 'Receive a comprehensive overview of your performance metrics, including response time and accuracy.',
    },
    {
      title: 'Customized Learning Pathways',
      content: 'Unlock personalized learning pathways based on your interview performance to enhance your skills.',
    },
    {
      title: 'Interview History and Trends',
      content: 'Track your interview history and identify trends to focus on areas that need improvement.',
    },
  ];

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="50vh"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Container maxW="2xl" mt="8" color={useColorModeValue('white.100', 'white.700')}>
        <Heading
          as="h2"
          fontSize="4xl"
          mb="6"
          textAlign="center"
          fontWeight="bold"
          color="teal.500"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          Frequently Asked Questions
        </Heading>

        <Accordion allowToggle>
          {feedbackItems.map((item, index) => (
            <AccordionItem key={index} borderWidth="1px" borderRadius="md" mb="4">
              <h2>
                <AccordionButton _expanded={{ bg: 'blue.500', color: 'white' }} p="2" borderRadius="md">
                  <Box flex="1" textAlign="left">
                    <Text fontSize="lg"  textColor={"gray.900"}>
                      {item.title}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>{item.content}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Flex>
  );
}
