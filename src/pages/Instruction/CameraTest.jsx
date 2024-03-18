import {
  Box,
  Button,
  Center,
  Heading,
  Kbd,
  Text,
  Image
} from "@chakra-ui/react";
import { Card, CardBody} from "@chakra-ui/react";
import React, { useState } from "react";
import Webcam from "react-webcam";


const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

function CameraTest({ setVideo }) {
  const [image,setImage] = useState(null);

  return (
    <Box>
      <Heading size="md" mt={20} textAlign={"center"}>
        Audio Test
      </Heading>
      <Center mt={10}>
        <Card variant="filled" height="50vh">
          <CardBody>
            <Text>
              {" "}
              <span>
                <Kbd>1.</Kbd>
              </span>
              Ensure you are aligned to the centre of the screen
            </Text>
            <Text>
              {" "}
              <span>
                <Kbd>2.</Kbd>
              </span>
              Click on “Capture Image” to click your photograph
            </Text>
            <Box mt={10}>
              {image?<Image src={image} /> : <Webcam width={"30%"} height={"30%"}>
                {({ getScreenshot }) => (
                  <Button
                    type="primary"
                    onClick={() => {
                      const imageSrc = getScreenshot();
                      setImage(imageSrc);
                      setVideo(false);
                    }}
                  >
                    Capture Image
                  </Button>
                )}
              </Webcam>}
            </Box>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
}

export default CameraTest;
