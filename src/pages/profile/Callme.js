import React, { useState } from 'react';
import { Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Image } from '@chakra-ui/react';
import CallmePop from '../../componenets/CallmePop';

const Callme = () => {
  const [modalIsOpen, setShowPopup] = useState(false);
  const setModalIsOpenToTrue = () => {
    setShowPopup(true);
  };
  return (
    <div>
      <CallmePop modalIsOpen={modalIsOpen} showPopup={setShowPopup} />
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg={'#ECEAF0'}>
        <Flex m={10} mt={60} flex={1} justify={'center'} align={'center'} maxW={'800px'} height={350}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Image alt={'Login Image'} objectFit={'cover'} src={'Images/image-144.png'} />
          </Stack>
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack p={5} bg={'#FFFFFF'} spacing={10} w={'540px'}>
            <Heading fontSize={'2xl'}>Call me back !</Heading>

            <FormControl id='email'>
              <FormLabel>Name</FormLabel>
              <Input type='name' />
            </FormControl>
            <FormControl id='email'>
              <FormLabel>Mobile Number</FormLabel>
              <Input type='number' />
            </FormControl>

            <Button onClick={setModalIsOpenToTrue} colorScheme={'blue'} background={'#773FC6'} variant={'solid'}>
              Submit
            </Button>
          </Stack>
        </Flex>
      </Stack>
    </div>
  );
};

export default Callme;
