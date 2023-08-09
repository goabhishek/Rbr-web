import React, { useState } from 'react';
import { Button, Flex, FormControl, Heading, Input, Stack, Image, Center, Text, Box } from '@chakra-ui/react';
import { FcFeedback, FcGoogle, FcTabletAndroid } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import LoginPopup from '../componenets/LoginPopup';
// import { useDispatch } from 'react-redux';
// import { createUser } from '../features/userDetailSlice';

// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  name: '',
  email: '',
  password: '',
  number: '',
};
const Register = () => {
  const [modalIsOpen, setShowPopup] = useState(false);
  const setModalIsOpenToTrue = () => {
    setShowPopup(true);
  };
  const [users, setUsers] = useState({ initialState });
  const { fname, email, password, number } = users;
  //   const dispatch = useDispatch();

  const getUserData = (e) => {
    // const { name, value } = e.target;
    // setUsers({ ...users, [name]: value });
    setUsers(e.target.value);
    console.log(setUsers);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('users...', users);
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log('users...', users);
  //     dispatch(createUser(users));

  //     if (!name || !email || !password) {
  //       return toast.error('All fields are required');
  //     }
  //     if (name.length < 4) {
  //       return toast.error('Please enter a valid Name');
  //     }
  //     if (password.length < 6) {
  //       return toast.error('  must be up to 6 characters');
  //     }
  //   };

  return (
    <div>
      {/* <ToastContainer /> */}
      <LoginPopup modalIsOpen={modalIsOpen} showPopup={setShowPopup} />
      <Stack align={'center'} backgroundColor={'#EDEBF1'} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex width={'700px'} direction={'column'} p={8} flex={1} align={'center'} justify={'center'}>
          <Heading mb={10} fontWeight={700} fontSize={'40px'}>
            Create an account
          </Heading>
          {/* <Box onSubmit={handleSubmit} as='form'> */}
          <Stack
            onSubmit={handleSubmit}
            as='form'
            borderRadius={'10px'}
            border={'1px solid #773FC640'}
            spacing={3}
            w={'full'}
            maxW={'md'}
          >
            <FormControl p={5} id='name' isRequired>
              <Input
                opacity={'0.5'}
                border={'1px solid #B4B3B3'}
                // name='name'
                placeholder='full name*'
                value={fname}
                onChange={getUserData}
              />
            </FormControl>
            <FormControl p={5} id='email' isRequired>
              <Input
                opacity={'0.5'}
                border={'1px solid #B4B3B3'}
                // name='email'
                value={email}
                onChange={getUserData}
                placeholder='e-mail address*'
                type='email'
              />
            </FormControl>
            <FormControl p={5}>
              <Input
                opacity={'0.5'}
                border={'1px solid #B4B3B3'}
                // name='password'
                value={password}
                type='password'
                onChange={getUserData}
                placeholder='enter a password*'
              />
            </FormControl>
            <FormControl p={5}>
              <Input
                opacity={'0.5'}
                border={'1px solid #B4B3B3'}
                // name='number'
                value={number}
                onChange={getUserData}
                placeholder='mobile number'
                type='number'
              />
            </FormControl>
            <FormControl p={5} id='verify' isRequired>
              <Input opacity={'0.5'} type='text' border={'1px solid #B4B3B3'} placeholder='tap to verify' />
            </FormControl>
            <Stack p={2} spacing={6}>
              <Button
                onSubmit={handleSubmit}
                onClick={setModalIsOpenToTrue}
                backgroundColor={'#773FC6'}
                color={'#fff'}
                variant={'solid'}
              >
                <Flex width={'552px'} direction={'column'} p={8} flex={1} align={'center'} justify={'center'}>
                  <Text fontWeight={700} fontSize={'18px'}>
                    Register
                  </Text>
                </Flex>
              </Button>
            </Stack>
          </Stack>
          {/* </Box> */}
        </Flex>
        <Flex direction={'column'} mt={40} flex={1}>
          <Image width={'450px'} height={'284px'} alt={'Login Image'} src={'Images/Group-626217.png'} />
          <Stack width={'450px'} borderTop={'1px solid #9CA3AF'}>
            <Center ml={40} width={40} backgroundColor={'#EDEBF1'} mt={-3}>
              <Text>or login through</Text>
            </Center>

            <Flex gap={20}>
              <Button
                border={'1px solid #773FC6'}
                borderRadius={'7px'}
                w={'200px'}
                variant={'outline'}
                leftIcon={<FcGoogle />}
              >
                <Center>
                  <Text>GOOGLE</Text>
                </Center>
              </Button>
              <Button
                border={'1px solid #773FC6'}
                borderRadius={'7px'}
                w={'200px'}
                // colorScheme={'facebook'}

                leftIcon={<FaFacebook />}
              >
                <Center>
                  <Text> FACEBOOK</Text>
                </Center>
              </Button>
            </Flex>
            <Flex mt={25} gap={20}>
              <Button
                border={'1px solid #773FC6'}
                borderRadius={'7px'}
                w={'200px'}
                variant={'outline'}
                leftIcon={<FcTabletAndroid />}
              >
                <Center>
                  <Text> MOBILE</Text>
                </Center>
              </Button>
              <Button
                border={'1px solid #773FC6'}
                borderRadius={'7px'}
                w={'200px'}
                // colorScheme={'facebook'}
                leftIcon={<FcFeedback />}
              >
                <Center>
                  <Text> EMAIL</Text>
                </Center>
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </div>
  );
};

export default Register;
