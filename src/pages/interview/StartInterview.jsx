import { Box, Button, Center, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  facingMode: "user"
};

function StartInterview() {

  
  return <Box height="100vh" border="1px solid black" >
    <Flex mt="100px" height="60vh" >
          <Flex m="10px"  justifyContent="center" borderRadius="20px" alignItems="center" width="50%" border="1px solid black">
             <Image height="100px" width="100px" borderRadius="50%"  src="https://avatars.githubusercontent.com/u/110078755?v=4"/>
          </Flex>
          <Box m="10px" borderRadius="20px" border="1px solid black" width="50%">
          <Webcam
    audio={false}
    style={{height:"100%", width:"100%",background:"black",borderRadius:"20px"}}
    screenshotFormat="image/jpeg"
    videoConstraints={videoConstraints}
  >
  </Webcam>
          </Box>
    </Flex>
   <Center mt="40px">
   <Button colorScheme='blue'>Start Interview</Button>
   </Center>
  </Box>;
}

export default StartInterview;
