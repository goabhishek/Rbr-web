import React from 'react';
import '../global.css';
import { Box, Container, Link, Button, SimpleGrid, Stack, Text, useColorModeValue, Image } from '@chakra-ui/react';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box bg={'#EDEBF1'} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
          <Stack align={'start'}>
            <Link href='/'>
              <img src='Images/RBR Logo 1.png' alt='logo' />
            </Link>
            <Text color={'#2F327D'} width={64} fontFamily={'inter'} align={'left'} fontSize={'20px'}>
              Our mission is to create economic and engagement opportunity for our people around the world - age no bar.
            </Text>
          </Stack>

          <Stack fontFamily={'inter'} align={'center'}>
            <ListHeader color={'#2F327D'}>About</ListHeader>
            <Box color={'#2F327D'} fontSize={20} lineHeight={'30px'} fontWeight={400} as='a' href={'#'}>
              About Us
            </Box>
            <Box color={'#2F327D'} fontSize={20} lineHeight={'30px'} fontWeight={400} as='a' href={'#'}>
              Features
            </Box>
            <Box color={'#2F327D'} fontSize={20} lineHeight={'30px'} fontWeight={400} as='a' href={'#'}>
              News
            </Box>
            <Box color={'#2F327D'} fontSize={20} lineHeight={'30px'} fontWeight={400} as='a' href={'#'}>
              Careers
            </Box>
            <Box color={'#2F327D'} fontSize={20} lineHeight={'30px'} fontWeight={400} as='a' href={'#'}>
              FAQ
            </Box>
          </Stack>

          <Stack fontFamily={'inter'} align={'center'}>
            <ListHeader>Support</ListHeader>
            <Box color={'#2F327D'} fontSize={20} lineHeight={'30px'} fontWeight={400} as='a' href={'#'}>
              Account
            </Box>
            <Box color={'#2F327D'} fontSize={20} lineHeight={'30px'} fontWeight={400} as='a' href={'#'}>
              Support Center
            </Box>
            <Box color={'#2F327D'} fontSize={20} lineHeight={'30px'} fontWeight={400} as='a' href={'#'}>
              Feedback
            </Box>
            <Box color={'#2F327D'} fontSize={20} lineHeight={'30px'} fontWeight={400} as='a' href={'#'}>
              Contact Us
            </Box>
            <Box color={'#2F327D'} fontSize={20} lineHeight={'30px'} fontWeight={400} as='a' href={'#'}>
              Accesbility
            </Box>
          </Stack>

          <Stack fontFamily={'inter'} align={'center'}>
            <ListHeader>Get Our App</ListHeader>

            <Button
              maxW={80}
              colorScheme='black'
              variant='outline'
              _hover={{
                textDecoration: 'none',
                color: '#fff',
                bg: 'gray.900',
              }}
              as={'a'}
              pr={7}
              pl={3}
              href={'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8'}
            >
              <Image
                width={8}
                height={'auto'}
                alt='IOS STORE'
                src='https://res.cloudinary.com/mabhi8251/image/upload/v1658300288/Gloitel-fitness/apple_1_rxix4f.png'
              />
              Get It On app store
            </Button>
            <Button
              maxW={60}
              colorScheme='black'
              variant='outline'
              _hover={{
                textDecoration: 'none',
                color: '#fff',
                bg: 'gray.900',
              }}
              as={'a'}
              pr={7}
              pl={3}
              href={'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8'}
            >
              <Image
                width={8}
                height={'auto'}
                alt='IOS STORE'
                src='https://res.cloudinary.com/mabhi8251/image/upload/v1658299971/Gloitel-fitness/google-play_watgwk.png'
              />
              Get It On Google Play
            </Button>
          </Stack>
          <Stack align={'center'}>
            <Box mt={'-35'} display='flex' flex='1' position='relative'>
              <Box alignItems='center' zIndex='2' marginLeft={{ base: '0', sm: '5%' }} marginTop='10%'>
                <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
                  <Image
                    borderRadius='lg'
                    src={'Images/Landing page 1.png'}
                    alt='some good alt text'
                    objectFit='contain'
                  />
                </Link>
              </Box>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Stack direction={'row'} spacing={6}></Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
