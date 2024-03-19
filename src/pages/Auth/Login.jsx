

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginApi } from '../../Redux/auth/login'
import LandingPg from '../Landing/LandingPg'

export default function Login() {
  const [form,setform]=useState("")
  const dispatch=useDispatch()
  const {error,isLoading,isLoggedIn,user}=useSelector((store)=>store.loginReducer)
 
  const handlechange=(e)=>{
      setform({...form,[e.target.name]: e.target.value})
  }

  const handleclick=()=>{
   
    dispatch(loginApi(form)).then(()=>{
      console.log(user)
    })
 
  }

  if(isLoggedIn){
    return <LandingPg />
  }
  return (
    <>
    <Navbar />
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={handlechange} name="email" required/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={handlechange} name="password" required/>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>
            <Button onClick={handleclick} colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
    <Footer />
    </>
  )
}