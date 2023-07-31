import React, { useState } from 'react';
import { Button, Flex, Text, FormControl, FormLabel, Heading, Input, Stack, Image } from '@chakra-ui/react';

import PassResetPop from '../../componenets/PassResetPop';

const ResetPage = () => {
  const [modalIsOpen, setShowPopup] = useState(false);
  const setModalIsOpenToTrue = () => {
    setShowPopup(true);
  };
  return (
    <div>
      <PassResetPop modalIsOpen={modalIsOpen} showPopup={setShowPopup} />
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg={'#ECEAF0'}>
        <Flex m={2} mt={20} flex={1} justify={'center'} align={'center'} maxW={'800px'} height={450}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Image alt={'Login Image'} objectFit={'cover'} src={'Images/Group-26113.png'} />
          </Stack>
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack p={5} bg={'#FFFFFF'} spacing={10} w={'540px'}>
            <Heading fontSize={'2xl'}>Reset Password</Heading>
            <Text name='text'>Do ensure your new password is atleast 6 characters long</Text>
            <FormControl id='email'>
              <FormLabel>Old Password</FormLabel>
              <Input type='password' />
            </FormControl>
            <FormControl id='email'>
              <FormLabel>New Password</FormLabel>
              <Input type='password' />
            </FormControl>
            <FormControl id='email'>
              <FormLabel>Confirm Password</FormLabel>
              <Input type='password' />
            </FormControl>

            <Stack borderTop={'1px solid #9CA3AF'} spacing={10}>
              <Button onClick={setModalIsOpenToTrue} colorScheme={'blue'} background={'#773FC6'} variant={'solid'}>
                Reset Password
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </div>
  );
};

export default ResetPage;
