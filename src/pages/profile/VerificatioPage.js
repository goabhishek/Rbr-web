import React from 'react';
import {
  Button,
  Flex,
  Text,
  FormControl,
  Heading,
  Stack,
  Image,
  Center,
  HStack,
  PinInputField,
  PinInput,
} from '@chakra-ui/react';

const VerificatioPage = () => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg={'#ECEAF0'}>
      <Flex m={2} mt={20} flex={1} justify={'center'} align={'center'} maxW={'800px'} height={450}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Image alt={'Login Image'} objectFit={'cover'} src={'Images/Group-26113.png'} />
        </Stack>
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack p={5} bg={'#FFFFFF'} spacing={10} w={'540px'}>
          <Heading fontSize={'2xl'}>Verification Code</Heading>
          <Text name='text'>
            Please type the verification code sent to johnraymonds@gmail.com or OTP sent to your mobile number
          </Text>
          <FormControl id='email'>
            <Center>
              <HStack>
                <PinInput>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Center>
          </FormControl>
          <Center>
            {' '}
            <Text>
              I didn't receive a code! <a href='/'>Please resend</a>
            </Text>
          </Center>

          <Button colorScheme={'blue'} background={'#773FC6'} variant={'solid'}>
            Continue
          </Button>
        </Stack>
      </Flex>
    </Stack>
  );
};
export default VerificatioPage;
