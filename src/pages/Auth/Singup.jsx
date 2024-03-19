'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Spinner,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'

import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../component/Loader'
import { userRestraionApi } from '../../Redux/auth/singup'
import Otp from '../../component/Otp'

const userdata={
  name:"",
  email:"",
  password:""
}

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
const [form,setform]=useState(userdata)

const singupselector=useSelector((store)=>store.singupReducer)
const dispatch=useDispatch()

const  {
  user,
  isSignedUp,
  isLoading,
  error,
}=singupselector


const handleclick=()=>{
  // console.log(form)

  dispatch(userRestraionApi(form))
  // userRestraionApi(form)
}

const handlecahnge=(e)=>{
  setform({...form,[e.target.name]:e.target.value})
}


 // Call useColorModeValue unconditionally
 const bgColor = useColorModeValue('gray.50', 'gray.800')
 const textColor =useColorModeValue('white', 'gray.700');




  return isLoading ? <Loader /> : isSignedUp ? <Otp /> : (
    <>
    <Navbar />
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={bgColor}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={textColor}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box w={"100%"}>
                <FormControl id="firstName" isRequired>
                  <FormLabel> Name</FormLabel>
                  <Input type="text" placeholder='Name' onChange={handlecahnge}  name='username'  required />
                </FormControl>
              </Box>
             
            </HStack>
            <FormControl >
            <Box>
                <FormControl id="lastName">
                  <FormLabel>Avatar</FormLabel>
                  <Input type="file" placeholder='avatar'   required />
                </FormControl>
              </Box>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email' placeholder='Email'  onChange={handlecahnge}  required />
            </FormControl>
            <FormControl >
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input      id="password" placeholder='password' onChange={handlecahnge}  name='password'  required  type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button

              onClick={handleclick}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    <Footer />
    </>
  )
}