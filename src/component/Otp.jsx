import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  HStack,
  PinInput,
  PinInputField,
  Button,
  useColorMode,
  Container,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtpApi } from "../Redux/auth/singup";
import LandingPg from "../pages/Landing/LandingPg";

function Otp() {
  const { colorMode } = useColorMode();
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const dispatch = useDispatch();
  const {verifyingOTP, otpVerified,user, error}=useSelector((store)=>store.singupReducer)

 
  const handleChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  const handleSubmit = () => {
    const activationCode = otpValues.join("");
    // Add your logic to handle OTP verification here
    const token=user.activationToken.token
    
    dispatch(verifyOtpApi({activationCode,token}));
    
  };

  const bgColor = { light: "white", dark: "gray.800" };
  const textColor = { light: "black", dark: "white" };
  const shadowColor = { light: "lg", dark: "dark-lg" };
  const borderColor = { light: "teal.400", dark: "teal.200" };

  if(otpVerified){
     return <LandingPg />
  }


  return   (
    <>
    
    <Navbar />
    <ChakraProvider>
      <Box
        height="60vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={bgColor[colorMode]}
        color={textColor[colorMode]}

      >
        <Container
          maxW="lg"
        
          p="6"
          borderRadius="xl"
          boxShadow={shadowColor[colorMode]}
        >
          <Box textAlign="center">
            <Heading as="h1" size="xl" mb="4">
              Welcome Back!
            </Heading>
            <Text fontSize="lg" mb="6">
              Please enter the OTP sent to your mobile number to verify your
              account.
            </Text>
          </Box>
          <HStack spacing="4" justify="center">
            <PinInput size="lg" variant="filled" autoComplete="off">
              {[0, 1, 2, 3].map((index) => (
                <PinInputField
                  key={index}
                  value={otpValues[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  _focus={{ borderColor: borderColor[colorMode] }}
                />
              ))}
            </PinInput>
            <Button
              colorScheme="teal"
              size="lg"
              onClick={handleSubmit}
              _hover={{ bg: "teal.500" }}
              _active={{ bg: "teal.600" }}
            >
              Verify
            </Button>
          </HStack>
        </Container>
      </Box>
    </ChakraProvider>
    <Footer />
    </>
  );
}

export default Otp;
