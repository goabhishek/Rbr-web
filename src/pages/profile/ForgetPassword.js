import React, { useState } from 'react';
import { Button, Flex, Text, FormControl, Heading, Input, Stack, Image, Center } from '@chakra-ui/react';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { forgotPassword, validateEmail } from '../../services/authServices';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const forgot = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error('Please enter an email');
    }

    if (!validateEmail(email)) {
      return toast.error('Please enter a valid email');
    }

    const userData = {
      email,
    };

    await forgotPassword(userData);
    setEmail('');
  };
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg={'#ECEAF0'}>
      <Flex m={2} mt={20} flex={1} justify={'center'} align={'center'} maxW={'800px'} height={450}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Image alt={'Login Image'} objectFit={'cover'} src={'Images/Group-26113.png'} />
        </Stack>
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack onSubmit={forgot} p={5} bg={'#FFFFFF'} spacing={10} w={'540px'}>
          <Heading
            color={'#2F327D'}
            fontWeight={1000}
            fontSize={{ base: '4xl', sm: '3xl', md: '6xl' }}
            lineHeight={'120%'}
            fontFamily={'Ubantu'}
          >
            Forgot Password
          </Heading>
          <Text fontSize={24}>Please enter your email address to reset your password</Text>
          <FormControl id='email'>
            <Input
              placeholder='Johnraymonds@gmail.com'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Button type='submit' onSubmit={forgot} colorScheme={'blue'} background={'#773FC6'} variant={'solid'}>
            Send Verification Code
          </Button>
          <Stack borderTop={'1px solid #9CA3AF'} spacing={10}>
            <Center ml={48} width={20} backgroundColor={'#fff'} mt={-3}>
              <Text>or </Text>
            </Center>
            <Text>Enter your mobile no.</Text>
            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
              <Input placeholder='+91 90805 90666' type='number' />
              <Button colorScheme={'blue'} background={'#773FC6'} variant={'solid'}>
                Send OTP
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default ForgetPassword;
