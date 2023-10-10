import React from 'react';
import '../global.css';
import {
  Box,
  Container,
  Link,
  Button,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Heading,
  Flex,
} from '@chakra-ui/react';

// const ListHeader = ({ children }) => {
//   return (
//     <Text fontWeight={'700'} fontFamily={'Inter'} fontSize={'lg'} mb={2}>
//       {children}
//     </Text>
//   );
// };

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
            <Heading fontWeight={'600'} color={'#101130'}>
              About
            </Heading>
            <Box
              color={'#2F327D'}
              fontFamily={'Inter'}
              fontSize={24}
              mt={2}
              lineHeight={'40px'}
              fontWeight={400}
              as='a'
              href={'#'}
            >
              About Us
            </Box>
            <Box color={'#2F327D'} fontSize={24} mt={2} lineHeight={'40px'} fontWeight={400} as='a' href={'#'}>
              Features
            </Box>
            <Box color={'#2F327D'} fontSize={24} mt={2} lineHeight={'40px'} fontWeight={400} as='a' href={'#'}>
              News
            </Box>
            <Box color={'#2F327D'} fontSize={24} mt={2} lineHeight={'40px'} fontWeight={400} as='a' href={'#'}>
              Careers
            </Box>
            <Box color={'#2F327D'} fontSize={24} mt={2} lineHeight={'40px'} fontWeight={400} as='a' href={'#'}>
              FAQ
            </Box>
          </Stack>

          <Stack fontFamily={'inter'} align={'center'}>
            <Heading fontWeight={'600'} color={'#101130'}>
              Support
            </Heading>
            <Box color={'#2F327D'} fontSize={24} mt={2} lineHeight={'40px'} fontWeight={400} as='a' href={'#'}>
              Account
            </Box>
            <Box color={'#2F327D'} fontSize={24} mt={2} lineHeight={'40px'} fontWeight={400} as='a' href={'#'}>
              Support Center
            </Box>
            <Box color={'#2F327D'} fontSize={24} mt={2} lineHeight={'40px'} fontWeight={400} as='a' href={'#'}>
              Feedback
            </Box>
            <Box color={'#2F327D'} fontSize={24} mt={2} lineHeight={'40px'} fontWeight={400} as='a' href={'#'}>
              Contact Us
            </Box>
            <Box color={'#2F327D'} fontSize={24} mt={2} lineHeight={'40px'} fontWeight={400} as='a' href={'#'}>
              Accesbility
            </Box>
          </Stack>

          <Stack fontFamily={'inter'} align={'center'}>
            <Heading fontWeight={'600'} color={'#101130'}>
              Get Our App
            </Heading>

            {/* <Button
              p={8}
              mt={8}
			  
              maxW={44}
              colorScheme='black'
              variant='outline'
              _hover={{
                textDecoration: 'none',
                color: '#fff',
                bg: 'gray.900',
              }}
              as={'a'}
              href={'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8'}
            >
              <Image m={2} width={8} height={'auto'} alt='IOS STORE' src='Images/Subtract.png' />
              <Flex direction={'column'}>
                <Text fontSize={14} fontFamily={'Inter'} color={'#606176'}>
                  Get it on
                </Text>
                <Text fontSize={24} fontFamily={'Inter'} color={'#606176'}>
                  Google Play
                </Text>
              </Flex>
            </Button> */}
            <Button
              p={8}
              mt={2}
              maxW={'200px'}
              colorScheme='black'
              variant='outline'
              _hover={{
                textDecoration: 'none',
                color: '#fff',
                bg: 'gray.900',
              }}
              as={'a'}
              href={'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8'}
            >
              <Image m={2} width={8} height={'auto'} alt='IOS STORE' src='Images/Subtract.png' />
              <Flex direction={'column'}>
                <Text fontSize={14} fontFamily={'Inter'} color={'#606176'}>
                  Get it on
                </Text>
                <Text fontSize={24} fontFamily={'Inter'} color={'#606176'}>
                  Google Play
                </Text>
              </Flex>
            </Button>
            <Button
              p={8}
              mt={2}
              maxW={'200px'}
              colorScheme='black'
              variant='outline'
              _hover={{
                textDecoration: 'none',
                color: '#fff',
                bg: 'gray.900',
              }}
              as={'a'}
              href={'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8'}
            >
              <Image m={2} width={8} height={'auto'} alt='IOS STORE' src='Images/Applelogo.png' />
              <Flex direction={'column'}>
                <Text fontSize={14} fontFamily={'Inter'} color={'#606176'}>
                  Download on the
                </Text>
                <Text fontSize={24} fontFamily={'Inter'} color={'#606176'}>
                  App Store
                </Text>
              </Flex>
            </Button>
          </Stack>
          <Stack align={'center'}>
            <Box mt={'-35'} display='flex' flex='1' position='relative'>
              <Box alignItems='center' zIndex='2' marginLeft={{ base: '0', sm: '5%' }}>
                <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
                  <Stack
                    display={{ base: 'none', md: 'flex' }}
                    mt={'-40px'}
                    height={'500px'}
                    width={'500px'}
                    //   roundedLeft={'full'}
                    rounded={'full'}
                    position={'absolute'}
                    backgroundColor={'#46B40F40'}
                  ></Stack>
                  <Image
                    fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }}
                    // marginLeft={24}
                    marginLeft={{ base: '2px', sm: '2px', md: '60px' }}
                    height={400}
                    position={'relative'}
                    borderRadius='lg'
                    src={'Images/Landingpage 1.png'}
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
