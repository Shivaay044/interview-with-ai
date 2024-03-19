import React from 'react';
import { Avatar, Box, Center, Heading, Text } from '@chakra-ui/react';
import Navbar from "../../component/Navbar"
import Footer from "../../component/Footer"
const Profile = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profilePicture: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1710410471~exp=1710411071~hmac=8da4acb5f99b8486ab4d2ced24ad7c292258f174ef75b6b6898d6b5286538395', // URL to profile picture
  };

  return (
    <>
<Navbar />
    <Center>
      <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" boxShadow="lg">
        <Avatar size="2xl" src={user.profilePicture} />
        <Box mt="4">
          <Heading as="h3" size="lg">{user.name}</Heading>
          <Text mt="2" color="gray.600">{user.bio}</Text>
        </Box>
      </Box>
    </Center>
    <Footer />
    </>
  );
};

export default Profile;
