import { Box, Button, Center, HStack, Heading, Text } from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import React, { useState } from "react";
import soundTest from "../../Utils/soundTest.mp3"
import { Flex } from "antd";

function AudioTest({setAudio}) {

  return (
    <Box>
      <Heading size="md" mt={20} textAlign={"center"}>
      Camera Test
      </Heading>
      <Center mt={10}>
        <Card variant="filled" height="50vh">
          <CardBody >
            <Text>
                We will play a short audio clip. Please confirm if you are able to hear the audio clip.
            </Text>
             <Box mt={10}>
             <audio controls>
              <source src={soundTest} type="audio/mp3" />
             </audio>
             </Box>
          </CardBody>
          <CardFooter>
                <Flex>
                      <Button onClick={()=> {setAudio(false)}} colorScheme='blue'>Yes, I Heared</Button>
                </Flex>
          </CardFooter>
        </Card>
      </Center>
    </Box>
  );
}

export default AudioTest;
