import React, { useRef, useState } from 'react';
import { Button, Flex, FormControl, Heading, Input, Stack, Image, Center, Text, Link } from '@chakra-ui/react';
import { FcFeedback, FcGoogle, FcTabletAndroid } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfilePop from '../componenets/ProfilePop';
import { useNavigate } from 'react-router-dom';
import { SET_LOGIN, SET_NAME } from '../features/authSlice';
import { loginUser, validateEmail } from '../services/authServices';
import { useDispatch } from 'react-redux';

const initialstate = {
  email: '',
  password: '',
};
const Login = () => {
  const count = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalIsOpen, setShowPopup] = useState(false);
  const [formData, setFormData] = useState(initialstate);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    console.log('submit');

    if (!email || !password) {
      return toast.error('All fields are required');
    }
    if (!validateEmail(email)) {
      return toast.error('Please enter a valid email');
    }

    const userData = {
      email,
      password,
    };
    try {
      const data = await loginUser(userData);
      console.log(data);
      dispatch(SET_LOGIN(true));
      dispatch(SET_NAME(data.name));
      navigate(setModalIsOpenToTrue());
    } catch (error) {
      //   dispatch(hideLoading());
      console.log(error);
    }
  };

  const setModalIsOpenToTrue = () => {
    setShowPopup(true);
  };
  return (
    <div>
      <ToastContainer />
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

            <Flex gap={10}>
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
            <Flex mt={25} gap={10}>
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
          <Heading
            mt={37}
            color={'#2F327D'}
            fontWeight={1000}
            fontSize={{ base: '4xl', sm: '3xl', md: '6xl' }}
            lineHeight={'120%'}
            fontFamily={'Ubantu'}
          >
            Login
          </Heading>
          <Stack
            // onSubmit={handleSubmit}
            as={'form'}
            onSubmit={login}
            mt={7}
            borderRadius={'10px'}
            border={'1px solid #773FC640'}
            spacing={3}
            w={'full'}
            minW={'sm'}
            shadow={'2xl'}
            maxW={'-webkit-max-content'}
          >
            <FormControl id='email' p={5} isRequired isInvalid={false} my='2'>
              <Input
                fontSize={24}
                fontFamily={'ubantu'}
                opacity={'0.5'}
                border={'1px solid #B4B3B3'}
                id='email'
                placeholder='Your full email*'
                name='email'
                value={email}
                ref={count}
                onChange={handleInputChange}
                type='email'
                autoFocus
                autoComplete='email'
              />
            </FormControl>

            <FormControl p={5} id='password' isRequired isInvalid={false}>
              <Input
                fontSize={24}
                fontFamily={'ubantu'}
                opacity={'0.5'}
                border={'1px solid #B4B3B3'}
                name='password'
                value={password}
                ref={count}
                onChange={handleInputChange}
                id='password'
                autoComplete='current-password'
                placeholder='enter a password*'
                isRequired
              />
            </FormControl>
            <Stack align={'start'} ml={30}>
              <Link href='/ForgetPassword' color={'#2F1A31'} fontSize={24} fontFamily={'ubantu'}>
                Forgot password?
              </Link>
            </Stack>

            <Stack p={5} spacing={4}>
              <Button
                fontSize={24}
                fontFamily={'ubantu'}
                // onSubmit={handleSubmit}
                // onClick={setModalIsOpenToTrue}
                onSubmit={login}
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
                  onClick={() => navigate('/Register')}
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
