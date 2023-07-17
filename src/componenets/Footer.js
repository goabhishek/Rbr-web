import React from 'react';
import '../global.css';
import { Box, Container, Link, Button, SimpleGrid, Stack, Text, useColorModeValue, Image } from '@chakra-ui/react';
// import MobileStoreButton from 'react-mobile-store-button';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  //   const AnsroidUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
  return (
    <Box width={'100%'} backgroundColor={'#EDEBF1'} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'8xl'} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <img src='Images/RBR Logo 1.png' alt='logo' />
            </Box>
            <Text fontSize={'m'} fontWeight={'500'} justifyContent={'center'}>
              Our mission is to create economic & engagement opportunity for our people around the world - age no bar.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>About</ListHeader>
            <Link color={'#606176'} href={'#'}>
              About Us
            </Link>
            <Link color={'#606176'} href={'#'}>
              Features
            </Link>
            <Link color={'#606176'} href={'#'}>
              News
            </Link>
            <Link color={'#606176'} href={'#'}>
              Careers
            </Link>
            <Link color={'#606176'} href={'#'}>
              FAQ
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link color={'#606176'} href={'#'}>
              Account
            </Link>
            <Link color={'#606176'} href={'#'}>
              Support center
            </Link>
            <Link color={'#606176'} href={'#'}>
              Feedback
            </Link>
            <Link color={'#606176'} href={'#'}>
              Contact Us
            </Link>
            <Link color={'#606176'} href={'#'}>
              Accesbility
            </Link>
          </Stack>
          <Stack align={'center'}>
            <ListHeader>Get Our App</ListHeader>

            <Button
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
          <Box mt={'-35'} display='flex' flex='1' position='relative'>
            <Box width={'400px'} alignItems='center' zIndex='2' marginLeft={{ base: '0', sm: '5%' }} marginTop='10%'>
              <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
                <Image
                  borderRadius='lg'
                  src={'Images/Landing page 1.png'}
                  alt='some good alt text'
                  objectFit='contain'
                />
              </Link>
            </Box>
            <Box zIndex='1' position='absolute' height='100%'>
              <Box
              // alignItems={'end'}
              // mr={'200px'}
              // bgGradient={useColorModeValue(
              //   'radial(orange.600 1px, transparent 1px)',
              //   'radial(orange.300 1px, transparent 1px)'
              // )}
              // backgroundSize='20px 20px'
              // opacity='0.4'
              // height='100%'
              />
              <img
                style={{
                  rotate: '-97.31 deg',
                }}
                src='Images/Ellipse 129.png'
                alt='back'
              />
            </Box>
            <img
              style={{
                rotate: '-97.31 deg',
              }}
              src='Images/Ellipse 128.png'
              alt='back'
            />
          </Box>
          {/* <img
            style={{
              rotate: '-97.31 deg',
            }}
            src='Images/rbr2.png'
            alt='back'
          />
          <Stack align={'flex-start'} width={'355.25px'} height={'264.74'} border={'1px'}>
            <img src='Images/rbr.png' alt='side' />
          </Stack> */}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
