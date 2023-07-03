import React from 'react';

import { useState, useEffect } from 'react';
import '../global.css';
import {
  Stack,
  Flex,
  Text,
  Container,
  Heading,
  SimpleGrid,
  Image,
  Grid,
  VStack,
  Center,
  Button,
  GridItem,
  useColorModeValue,
  StackDivider,
} from '@chakra-ui/react';
import {} from '@chakra-ui/react';
import { IoSearchSharp, IoLogoBitcoin, IoAnalyticsSharp } from 'react-icons/io5';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const Home = () => {
  const sliderData = [
    {
      image: 'https://res.cloudinary.com/mabhi8251/image/upload/v1637396498/samples/people/bicycle.jpg',
      //   heading: 'Your Fitness Meet the All-New  ',
      //   desc: 'provide more support around improving our wellness by allowing us to track health and fitness achievements from anywhere.',
      //   btn: <ButtonOn name='Start Your journey with us' link='/GoalPage' />,
    },
    {
      image: 'Images/rbr3.png',
      heading: 'Are You Ready to start your day with RBR',
      desc: 'This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.',
    },
    {
      image: 'Images/rbr2.png',
      //   heading: 'books our best doctors and best Prowfit trainers',
      //   desc: 'This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 4000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log('next');
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log('prev');
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div style={{ backgroundColor: '#EDEBF1' }}>
      <div className='slider'>
        {sliderData.map((slide, index) => {
          return (
            <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
              {index === currentSlide && (
                <div>
                  <Stack>
                    <img
                      className='image'
                      style={{
                        height: '100vh',
                        objectFit: 'cover',
                        filter: 'brightness(1)',
                      }}
                      src={slide.image}
                      alt='slides'
                    />
                  </Stack>
                  <div className='content'>
                    <Flex p={20} flex={1} align={'center'} justify={'center'} mt={-400}>
                      <Stack spacing={4} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                          <Text
                            as={'span'}
                            color={'blackAlpha.800'}
                            position={'relative'}
                            _after={{
                              width: 'full',
                              //   height: useBreakpointValue({ base: '20%', md: '30%' }),
                              position: 'absolute',
                              //   bottom: 1,
                              left: 0,
                              bg: 'red.400',
                              zIndex: -1,
                            }}
                          >
                            <h2>{slide.heading}</h2>
                          </Text>
                          <br /> <Text color={'blue.400'} as={'span'}></Text>{' '}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'blue.600'}>
                          {slide.desc}
                        </Text>
                      </Stack>
                    </Flex>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Container maxW={'7xl'} py={5} mb={20} mt={60}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={10}>
            <Heading color={'#773FC6'}>Where young minds meet industrious retirees</Heading>

            <Stack divider={<StackDivider borderColor={useColorModeValue('#606176', 'gray.700')} />}>
              <Feature
                text={
                  'Retired professionals have a wealth of knowledge, wisdom and skills that can be beneficial to currently employed professionals. RBR is where this juncture is made possible.'
                }
              />
            </Stack>

            <Button
              width={'176px'}
              rounded={'full'}
              height={'50px'}
              px={6}
              fontSize={'18px'}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}
            >
              Start your journey
            </Button>
          </Stack>

          <Flex>
            <Image rounded={'md'} alt={'feature image'} src={'Images/rbr3.png'} objectFit={'cover'} />
          </Flex>
        </SimpleGrid>
      </Container>

      <Container
        backgroundColor={'#6300FF0F'}
        borderRadius={'md'}
        border={'1px solid #6300FF0F'}
        height={'554px'}
        maxW={'8xl'}
        mt={40}
      >
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}
          mt={'130px'}
        >
          <GridItem colSpan={1}>
            <VStack alignItems='center' spacing='40px'>
              <Heading fontSize='3xl' fontWeight='700' color={'#2F327D'}>
                Introducing
              </Heading>
              <Heading fontSize='8xl' fontWeight='1000' color={'#2F327D'}>
                RetPro
              </Heading>
              <Text fontSize={'3xl'} fontWeight={'700'}>
                for retired professionals
              </Text>
            </VStack>
          </GridItem>
          <GridItem left={'650px'}>
            <Flex alignItems='center'>
              <Center mt={20}>
                <Button
                  height={'90px'}
                  width={'292px'}
                  rounded={'2xl'}
                  px={6}
                  ml={'70px'}
                  colorScheme={''}
                  bg={'#773FC6'}
                  fontSize={'24px'}
                  fontWeight={'500'}
                  // _hover={{ bg: 'orange.500' }}
                >
                  Start Your Junrney
                </Button>
              </Center>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
      <Container
        backgroundColor={'#55FF001F'}
        borderRadius={'md'}
        border={'1px solid #55FF001F'}
        height={'554px'}
        maxW={'8xl'}
        mt={40}
      >
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}
          mt={'130px'}
        >
          <GridItem colSpan={1}>
            <Center mt={20}>
              <Button
                height={'90px'}
                width={'292px'}
                rounded={'2xl'}
                px={6}
                ml={'70px'}
                colorScheme={''}
                bg={'#46B40F'}
                fontSize={'24px'}
                fontWeight={'500'}
                // _hover={{ bg: 'orange.500' }}
              >
                Start Your Junrney
              </Button>
            </Center>
          </GridItem>
          <GridItem left={'650px'}>
            <Flex alignItems='center'>
              <VStack alignItems='center' spacing='40px'>
                <Heading fontSize='3xl' fontWeight='700' color={'#2F327D'}>
                  Currently working?
                </Heading>
                <Heading fontSize='8xl' fontWeight='1000' color={'#46B40F'}>
                  JunPro
                </Heading>
                <Text fontSize={'3xl'} fontWeight={'700'}>
                  for employed professionals
                </Text>
              </VStack>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
      <Container borderRadius={'md'} height={'50px'} maxW={'6xl'} mt={20}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={35}
        >
          <GridItem colSpan={1}>
            <Text fontWeight={'bold'} fontSize={'25px'} color={'#2F327D'}>
              Ask us how we are transforming lives.
            </Text>
          </GridItem>
          <GridItem left={'650px'}>
            <Button border={'1px solid #2F327D'} borderRadius={'3xl'} height={'48px'} width={'250px'}>
              Let's Chat
            </Button>
            <Button ml={'30px'} border={'1px solid #46B40F'} borderRadius={'3xl'} height={'48px'} width={'250px'}>
              Request Callback
            </Button>
          </GridItem>
        </Grid>
      </Container>
      <Container
        backgroundColor={'#55FF001F'}
        borderRadius={'md'}
        border={'1px solid red'}
        height={'554px'}
        maxW={'8xl'}
        mt={20}
      >
        <Heading>So much you can do with REtPRO</Heading>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}
          mt={'130px'}
        >
          <GridItem colSpan={1}>
            <Center mt={20}></Center>
          </GridItem>
          <GridItem left={'650px'}>
            <Flex alignItems='center'></Flex>
          </GridItem>
        </Grid>
      </Container>
      <Container
        backgroundColor={'#55FF001F'}
        borderRadius={'md'}
        border={'1px solid red'}
        height={'554px'}
        maxW={'8xl'}
        mt={40}
      >
        <Heading>Fastrack your career with JunPRO</Heading>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}
          mt={'130px'}
        >
          <GridItem colSpan={1}>
            <Center mt={20}></Center>
          </GridItem>
          <GridItem left={'650px'}>
            <Flex alignItems='center'></Flex>
          </GridItem>
        </Grid>
      </Container>
      <Container
        backgroundColor={'#55FF001F'}
        borderRadius={'md'}
        border={'1px solid red'}
        height={'554px'}
        maxW={'8xl'}
        mt={40}
      >
        <Heading>Meet the RetPro area experts</Heading>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}
          mt={'130px'}
        >
          <GridItem colSpan={1}>
            <Center mt={20}></Center>
          </GridItem>
          <GridItem left={'650px'}>
            <Flex alignItems='center'></Flex>
          </GridItem>
        </Grid>
      </Container>
      <Container borderRadius={'md'} border={'1px solid red'} height={'554px'} maxW={'8xl'} mt={40}>
        <Heading>Creating impact for retired and working professionals</Heading>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}
          mt={'130px'}
        >
          <GridItem colSpan={1}>
            <Center mt={20}></Center>
          </GridItem>
          <GridItem left={'650px'}>
            <Flex alignItems='center'></Flex>
          </GridItem>
        </Grid>
      </Container>
      <Container borderRadius={'md'} border={'1px solid red'} height={'554px'} maxW={'8xl'} mt={40}>
        <Heading ml={'40'} fontSize={'5xl'}>
          Some real-life success stories to get inspired by
        </Heading>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}
          mt={'130px'}
        >
          <GridItem colSpan={1}>
            <Center mt={20}></Center>
          </GridItem>
          <GridItem left={'650px'}>
            <Flex alignItems='center'></Flex>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

export default React.memo(Home);
