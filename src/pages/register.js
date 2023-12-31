import React, { useState, useEffect } from 'react';
import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Image,
  Center,
  Text,
  Box,
  InputRightElement,
  InputGroup,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FcFeedback, FcGoogle, FcRefresh, FcTabletAndroid } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import LoginPopup from '../componenets/LoginPopup';
import { SET_LOGIN, SET_NAME } from '../features/authSlice';
import { registerUser, validateEmail } from '../services/authServices';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RepeatClockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Refresh } from '@mui/icons-material';
const initialState = {
  name: '',
  email: '',
  password: '',
  number: '',
  repassword: '',
};
const Register = () => {
  //for captcha
  const [showPassword, setShowPassword] = useState(false);
  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);
  const refreshString = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  };
  const [repassword, setRepassword] = useState();
  const [text, setText] = useState('');
  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState(false);
  //   const matchCaptcha = (event) => {
  //     event.preventDefault();

  //   };

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [modalIsOpen, setShowPopup] = useState(false);
  const setModalIsOpenToTrue = () => {
    setShowPopup(true);
  };
  const [formData, setformData] = useState(initialState);
  const { name, email, password, number } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setformData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !captcha || !number) {
      return toast.error('All fields are required');
    }
    if (name.length < 4) {
      return toast.error('Please enter a valid Name');
    }
    if (!validateEmail(email)) {
      return toast.error('Please enter a valid email');
    }

    if (password.length < 6) {
      return toast.error('Passwords must be up to 6 characters');
    }
    if (text === captcha) {
      setValid(false);
      setSuccess(true);
    } else {
      setValid(true);
      setSuccess(false);
      return toast.error('please enter valid captcha');
    }
    if (password === !setRepassword) {
      return toast.error('Please match the password');
    }

    const userData = {
      name,
      email,
      password,
      number,
    };
    // setIsLoading(true);
    try {
      const data = await registerUser(userData);
      //   dispatch(showLoading());
      console.log(data);
      await dispatch(SET_LOGIN(true));
      //   await dispatch(SET_NAME(data.name));
      //     dispatch(hideLoading());
      navigate(setModalIsOpenToTrue());
      //     setIsLoading(false);
    } catch (error) {
      //     setIsLoading(false);
      //     dispatch(hideLoading());

      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <LoginPopup modalIsOpen={modalIsOpen} showPopup={setShowPopup} />
      <Stack align={'center'} backgroundColor={'#EDEBF1'} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flexWrap={'wrap'} direction={'column'} p={8} flex={1} align={'center'}>
          <Heading
            ml={2}
            mb={4}
            color={'#2F327D'}
            fontWeight={700}
            fontSize={{ base: '34px', sm: '34px', md: '54px' }}
            lineHeight={'120%'}
            fontFamily={'Ubuntu'}
          >
            Create an account
          </Heading>
          <Box as='form' onSubmit={register}>
            {/* <form style={{ width: '100%' }} onSubmit={register} noValidate> */}
            <Stack
              maxW={{ base: '350px', sm: '150px', md: '550px' }}
              as='form'
              borderRadius={'10px'}
              border={'2px solid #773FC640'}
              //   w={'full'}
            >
              <FormControl fontFamily={'Ubuntu'} p={8} id='name' isRequired>
                <Input
                  fontSize={{ base: '18px', sm: '18px', md: '18px' }}
                  fontFamily={'Ubuntu'}
                  height={'50px'}
                  //   color={'#CCCBCB'}
                  //   opacity={'0.5'}
                  name='name'
                  border={'2px solid #B4B3B3'}
                  placeholder='full name*'
                  value={name}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl p={8} id='email' isRequired>
                <Input
                  fontSize={{ base: '18px', sm: '18px', md: '18px' }}
                  fontFamily={'Ubuntu'}
                  height={'50px'}
                  //   opacity={'0.5'}
                  border={'2px solid #B4B3B3'}
                  name='email'
                  value={email}
                  onChange={handleInputChange}
                  placeholder='e-mail address*'
                  type='email'
                />
              </FormControl>
              <FormControl p={8} isRequired>
                <Input
                  fontSize={{ base: '18px', sm: '18px', md: '18px' }}
                  fontFamily={'Ubuntu'}
                  height={'50px'}
                  //   opacity={'0.5'}
                  border={'2px solid #B4B3B3'}
                  name='password'
                  value={password}
                  type='password'
                  onChange={handleInputChange}
                  placeholder='enter a password*'
                />
              </FormControl>
              <FormControl p={8} isRequired>
                <InputGroup>
                  <Input
                    fontSize={{ base: '18px', sm: '18px', md: '18px' }}
                    fontFamily={'Ubuntu'}
                    height={'50px'}
                    //   opacity={'0.5'}
                    border={'2px solid #B4B3B3'}
                    name='repassword'
                    value={repassword}
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleInputChange}
                    placeholder='confirm-password*'
                  />
                  <InputRightElement h={'full'}>
                    <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {!password === repassword ? (
                  <FormHelperText>Enter the email you'd like to receive the newsletter on.</FormHelperText>
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl p={8} isRequired>
                {/* <PhoneInput country={'us'} value={this.state.phone} onChange={(phone) => this.setState({ phone })} /> */}
                <Input
                  fontSize={{ base: '18px', sm: '18px', md: '18px' }}
                  fontFamily={'Ubuntu'}
                  height={'50px'}
                  //   opacity={'0.5'}
                  border={'2px solid #B4B3B3'}
                  name='number'
                  value={number}
                  onChange={handleInputChange}
                  placeholder='mobile number*'
                  type='number'
                />
              </FormControl>

              <FormControl p={8} id='verify' isRequired>
                <Input
                  fontSize={{ base: '18px', sm: '18px', md: '18px' }}
                  fontFamily={'Ubuntu'}
                  height={'50px'}
                  //  opacity={'0.5'}
                  type='text'
                  border={'2px solid #B4B3B3'}
                  placeholder='Enter here captcha code '
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  error={valid}
                />
                <Flex m={4} direction={'row'}>
                  <Text
                    align={'center'}
                    width={'24'}
                    fontSize={24}
                    fontFamily={'Ubuntu'}
                    color={'#FFFFFF'}
                    backgroundColor={'#773FC6'}
                    m={4}
                  >
                    {captcha}
                  </Text>
                  <Button color={'#FFFFFF'} backgroundColor={'#773FC6'} m={4} onClick={() => refreshString()}>
                    {' '}
                    <Refresh />
                    <Text m={2}> Refresh </Text>
                  </Button>
                </Flex>
              </FormControl>
              <Stack p={8} mt={-8}>
                <Button
                  height={'50px'}
                  //   onSubmit={handleSubmit}

                  backgroundColor={'#773FC6'}
                  color={'#fff'}
                  variant={'solid'}
                >
                  <Flex
                    width={'552px'}
                    direction={'column'}
                    p={8}
                    flex={1}
                    align={'center'}
                    justify={'center'}
                    fontSize={{ base: '18px', sm: '18px', md: '24px' }}
                    fontFamily={'Ubuntu'}
                  >
                    <button
                      //   type='submit'
                      //  onSubmit={register}
                      className='btn btn-primary'
                      ata-dismiss='modal'
                      onClick={register}
                    >
                      <i className='fa fa-user-plus' aria-hidden='true'></i> Create account
                    </button>
                  </Flex>
                </Button>
                <Flex m={11}>
                  <Text fontSize={{ base: '16px', sm: '16px', md: '16px' }} fontFamily={'Ubuntu'}>
                    Already have an account?
                  </Text>
                  <Link to={'/login'}>
                    <Button
                      color={'#EF8062'}
                      variant='link'
                      display='inline'
                      ml='2'
                      textDecoration='underline'
                      fontSize='1.1rem'
                      fontFamily={'ubuntu'}
                      // onClick={() => navigate('/login', { state: location.state, replace: true })}
                    >
                      Log In here
                    </Button>
                  </Link>
                </Flex>
              </Stack>
            </Stack>
            {/* </form> */}
          </Box>
        </Flex>

        <Flex overflow={'hidden'} flexWrap={'wrap'} direction={'column'} mt={30} flex={1}>
          <Image
            // shadow={'dark-lg'}
            width={{ base: '400px', sm: '250px', md: '450px' }}
            height={'284px'}
            alt={'Login Image'}
            src={'Images/Group-626217.png'}
          />
          <Stack mt={12} width={{ base: '350px', sm: '250px', md: '450px' }} borderTop={'1px solid #9CA3AF'}>
            <Center ml={{ base: '100px', sm: '40px', md: '140px' }} width={40} backgroundColor={'#EDEBF1'} mt={-3}>
              <Text fontSize={18}>or login through</Text>
            </Center>

            <Flex mt={6} gap={20}>
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
    </>
  );
};

export default Register;
