import React from "react";
import { Box, Center, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


function StartInstruction() {

  return <Box >
  <Heading size="md" mt={20} textAlign={"center"}>Keep the following in mind.</Heading>
  <Center>
  <SimpleGrid marginTop={20} spacing={8} templateColumns='repeat(3, 0.5fr)'>
  <Card>
    <CardHeader>
       <Image src="https://interviewprime.ai/assets/browsers-24ea9ecb.svg"/>
    </CardHeader>
    <CardBody>
      <Heading size="md">Make sure you are using the right browser.</Heading>
    </CardBody>
    <CardFooter>
    <Text>This interview requires Chrome or Brave browsers. Please ensure you are using on of these browsers.</Text>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
       <Image src="https://interviewprime.ai/assets/noise-b2ecad60.svg"/>
    </CardHeader>
    <CardBody>
      <Heading size="md">Ensure there is no noise in the background.</Heading>
    </CardBody>
    <CardFooter>
    <Text>Please make sure you are in a quiet environment to avoid disruptions during the interview.</Text>
    </CardFooter>
  </Card><Card>
    <CardHeader>
       <Image src="https://interviewprime.ai/assets/video-recording-638dbb77.svg"/>
    </CardHeader>
    <CardBody>
      <Heading size="md">Make sure you are using the right browser.</Heading>
    </CardBody>
    <CardFooter>
    <Text>Ensure all your other tabs and windows are closed in order to have an uninterrupted interview experience.</Text>
    </CardFooter>
  </Card>
</SimpleGrid>
     </Center>
  </Box>;
}

export default StartInstruction;
