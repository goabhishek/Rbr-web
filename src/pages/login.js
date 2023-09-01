import React, { useState } from 'react';
import { Button, Flex, FormControl, Heading, Input, Stack, Image, Center, Text, Link } from '@chakra-ui/react';
import { FcFeedback, FcGoogle, FcTabletAndroid } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import ProfilePop from '../componenets/ProfilePop';
import { useLocation, useNavigate } from 'react-router-dom';
// const initialstate = {
//   name,
//   password,
// };
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };
  const [modalIsOpen, setShowPopup] = useState(false);
  const setModalIsOpenToTrue = () => {
    setShowPopup(true);
  };
  return (
    <div>
      <ProfilePop modalIsOpen={modalIsOpen} showPopup={setShowPopup} />
      <Stack backgroundColor={'#EDEBF1'} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex transition={'linear'} align={'center'} direction={'column'} mt={40} flex={1}>
          <Image
            shadow={'dark-lg'}
            width={'450px'}
            height={'284px'}
            alt={'Login Image'}
            src={'Images/Group-626217.png'}
          />
          <Stack mt={12} width={'450px'} borderTop={'1px solid #9CA3AF'}>
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
        <Flex
          //   width={'700px'}
          height={'420px'}
          direction={'column'}
          flex={1}
          align={'center'}
          justifyContent={'space-between'}
        >
          <Heading fontWeight={700} mt={37} fontSize={'40px'}>
            Login
          </Heading>
          <Stack
            onSubmit={handleSubmit}
            mt={7}
            borderRadius={'10px'}
            border={'1px solid #773FC640'}
            spacing={3}
            w={'full'}
            minW={'sm'}
            shadow={'2xl'}
            maxW={'-webkit-max-content'}
          >
            <FormControl p={5} width='100%' isRequired isInvalid={false} my='2'>
              <Input
                opacity={'0.5'}
                border={'1px solid #B4B3B3'}
                placeholder='Your full email*'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='name'
              />
            </FormControl>

            <FormControl p={5} isRequired isInvalid={false}>
              <Input
                opacity={'0.5'}
                border={'1px solid #B4B3B3'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='enter a password*'
                isRequired
              />
            </FormControl>
            <Stack align={'start'} ml={30}>
              <Link href='/ForgetPassword' color={'#2F1A31'}>
                Forgot password?
              </Link>
            </Stack>

            <Stack p={5} spacing={6}>
              <Button
                onSubmit={handleSubmit}
                onClick={setModalIsOpenToTrue}
                backgroundColor={'#773FC6'}
                color={'#fff'}
                type='submit'
                variant={'solid'}
              >
                <Flex width={'552px'} direction={'column'} p={8} flex={1} align={'center'} justify={'center'}>
                  <Text fontWeight={700} fontSize={'18px'}>
                    Login
                  </Text>
                </Flex>
              </Button>
              <Flex justifyContent={'center'}>
                <span>Dont have an account?</span>
                <Button
                  color={'#EF8062'}
                  variant='link'
                  display='inline'
                  ml='2'
                  textDecoration='underline'
                  fontSize='1.1rem'
                  onClick={() => navigate('/Register', { state: location.state, replace: true })}
                >
                  Sign up here
                </Button>
              </Flex>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </div>
  );
};

export default Login;
