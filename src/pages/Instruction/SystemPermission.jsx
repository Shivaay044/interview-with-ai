import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import React from "react";
import { Kbd } from "@chakra-ui/react";

function SystemPermission() {
  return (
    <Box>
      <Heading size="md" mt={20} textAlign={"center"}>
        Allow microphone & camera permissions
      </Heading>
      <Center mt={10}>
        <Card>
          <CardBody >
            <Text>
              {" "}
              <span>
                <Kbd>1.</Kbd>
              </span>
               Check the top left corner of your browser.
            </Text>
            <Text>
              {" "}
              <span>
                <Kbd>2.</Kbd>
              </span>
               Click on “Allow” to provide access.
            </Text>
            <Text>
              <span>
                <Kbd>3.</Kbd>
              </span>
               In case you don’t see this window, kindly enable permissions from
              your browser settings.
            </Text>
          </CardBody>
          <CardFooter>
            <Image
              height="200px"
              width="300px"
              src="https://interviewprime.ai/assets/permission-desktop-be46cc07.png"
            />
          </CardFooter>
        </Card>
      </Center>
    </Box>
  );
}

export default SystemPermission;
