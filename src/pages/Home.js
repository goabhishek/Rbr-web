import React from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { useState, useEffect } from 'react';
import '../global.css';
import {
  Stack,
  Flex,
  Text,
  Container,
  UnorderedList,
  ListItem,
  Heading,
  SimpleGrid,
  Image,
  Grid,
  VStack,
  Center,
  Button,
  GridItem,
  Avatar,
  useColorModeValue,
  StackDivider,
} from '@chakra-ui/react';

import {} from '@chakra-ui/react';

const Home = () => {
  const sliderData = [
    {
      image: 'https://res.cloudinary.com/mabhi8251/image/upload/v1637396498/samples/people/bicycle.jpg',
      //   heading: 'Your Fitness Meet the All-New  ',
      //   desc: 'provide more support around improving our wellness by allowing us to track health and fitness achievements from anywhere.',
      //   btn: <ButtonOn name='Start Your journey with us' link='/GoalPage' />,
    },
    {
      image: 'https://res.cloudinary.com/mabhi8251/image/upload/v1637396498/samples/people/bicycle.jpg',

      heading: 'Are You Ready to start your day with RBR',
      desc: 'This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.',
    },
    {
      image: 'https://res.cloudinary.com/mabhi8251/image/upload/v1637396498/samples/people/bicycle.jpg',

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
              <Text>
                Retired professionals have a wealth of knowledge, wisdom and skills that can be beneficial to currently
                employed professionals. RBR is where this juncture is made possible.
              </Text>
              {/* <Feature
                text={
                  'Retired professionals have a wealth of knowledge, wisdom and skills that can be beneficial to currently employed professionals. RBR is where this juncture is made possible.'
                }
              /> */}
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
            <Image rounded={'md'} alt={'feature image'} src={'Images/Rectangle 96.png'} objectFit={'cover'} />
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
                  Start your journey
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
                Start your journey
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
      <Container height={'554px'} maxW={'7xl'} mt={20}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          mt={'50px'}
        >
          <GridItem colSpan={1} justifyContent={'center'} mt={'50px'}>
            {/* <Flex direction={'row'}> */}
            <Image src='Images/Group-114.png' alt='oldman' />
          </GridItem>
          <Flex direction={'column'}>
            <Heading color={'#2F327D'} fontWeight={'bold'} fontSize={'22px'}>
              So much you can do with{' '}
            </Heading>

            <br />
            <GridItem height={'64px'} width={'140px'} ml={'60px'}>
              <img src='Images/Ret-pro-logo 2.png' alt='' />
            </GridItem>
            <GridItem>
              {/* <Flex alignItems='center'> */}
              <Text fontSize={'17px'} color={'#000000'}>
                (your skills are all you need to begin)
              </Text>
              {/* </Flex> */}
            </GridItem>
            <GridItem width={700} mt={24} ml={'-120px'} justifyContent={'start'}>
              <img src='Images/Group-626024.png' alt='' />
            </GridItem>
            {/* </Grid> */}
          </Flex>

          {/* </Flex>/ */}
        </Grid>
      </Container>
      <Container height={'554px'} maxW={'6xl'} mt={20}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          mt={'50px'}
        >
          <Flex direction={'column'} justifyContent={'start'} align={'center'}>
            <Heading color={'#2F327D'} fontWeight={'bold'} fontSize={'22px'}>
              Fastrack your career with{' '}
            </Heading>

            <br />
            <GridItem height={'64px'} width={'140px'}>
              <img src='Images/JunPro-2.png' alt='' />
            </GridItem>
            <GridItem>
              {/* <Flex alignItems='center'> */}
              <Text fontSize={'17px'} color={'#000000'}>
                (your skills are all you need to begin)
              </Text>
              {/* </Flex> */}
            </GridItem>
            <GridItem width={700} mt={24} justifyContent={'center'}>
              <img src='Images/Group-626024.png' alt='' />
            </GridItem>
            {/* </Grid> */}
          </Flex>

          <GridItem width={'308px'} colSpan={1} justifyContent={'center'} mt={'50px'}>
            {/* <Flex direction={'row'}> */}
            <Image src='Images/How-it-works.png' alt='oldman' />
          </GridItem>

          {/* </Flex>/ */}
        </Grid>
      </Container>{' '}
      <Container align={'center'} maxW={'9xl'} mt={40}>
        <Heading display={'inline-block'} align={'center'} color={'#2F327D'} width={'608px'}>
          Meet the <span style={{ color: '#773FC6', fontSize: '55px' }}>RetPro</span>
          area experts
        </Heading>
        <Flex justifyContent={'space-evenly'} mt={8}>
          <Flex
            width={'235px'}
            border={'1px solid #773FC680'}
            borderRadius={'20px'}
            align={'center'}
            mt={8}
            direction={'column'}
          >
            <Avatar src='Images/Business-1.png' alt='name' p={2} mb={4} width={130} height={32} />
            <Stack spacing={-1} align={'center'}>
              <Text
                fontSize='24px'
                fontWeight={800}
                maxW={190}
                color={useColorModeValue('gray.600', 'gray.400')}
                mb={4}
              >
                Frontend
              </Text>
            </Stack>
          </Flex>
          <Flex
            width={'235px'}
            border={'1px solid #773FC680'}
            borderRadius={'20px'}
            align={'center'}
            mt={8}
            direction={'column'}
          >
            <Avatar p={2} src='Images/Entertainment-1.png' alt='name' mb={4} width={130} height={32} />
            <Stack spacing={-1} align={'center'}>
              <Text
                fontSize='24px'
                fontWeight={800}
                maxW={190}
                color={useColorModeValue('gray.600', 'gray.400')}
                mb={4}
              >
                Professors
              </Text>
            </Stack>
          </Flex>
          <Flex
            width={'235px'}
            border={'1px solid #773FC680'}
            borderRadius={'20px'}
            align={'center'}
            mt={8}
            direction={'column'}
          >
            <Avatar p={2} src='Images/Law-&-Order-1.png' alt='name' mb={4} width={130} height={32} />
            <Stack spacing={-1} align={'center'}>
              <Text
                fontSize='24px'
                fontWeight={800}
                maxW={190}
                color={useColorModeValue('gray.600', 'gray.400')}
                mb={4}
              >
                Mentors
              </Text>
            </Stack>
          </Flex>
          <Flex
            width={'235px'}
            border={'1px solid #773FC680'}
            borderRadius={'20px'}
            align={'center'}
            mt={8}
            direction={'column'}
          >
            <Avatar p={2} src='Images/110.png' alt='name' mb={4} width={130} height={32} />
            <Stack spacing={-1} align={'center'}>
              <Text
                fontSize='24px'
                fontWeight={800}
                maxW={190}
                color={useColorModeValue('gray.600', 'gray.400')}
                mb={4}
              >
                Consultants
              </Text>
            </Stack>
          </Flex>
        </Flex>
      </Container>
      <Center mt={20}>
        <Button
          fontSize={'20px'}
          color={'#773FC6'}
          border={'1px solid #773FC6'}
          borderRadius={'3xl'}
          height={'48px'}
          width={'250px'}
        >
          Explore all
        </Button>
      </Center>
      <Container borderRadius={'md'} height={'554px'} maxW={'8xl'} mt={35}>
        <Center>
          <Heading align={'center'} width={'700px'} lineHeight={'56px'} fontSize={'44px'} color={'#101130'}>
            Creating impact for retired and working professionals
          </Heading>
        </Center>
        <Stack minH={'504px'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={10} flex={1} justify={'center'}>
            <Stack background={'#EDF3FF'} width={'504px'} height={'411px'} spacing={5} w={'70%'}>
              <Heading borderTopRadius={'20px'} height={20} align={'center'} background={'#773FC6'}>
                {' '}
                <Text justifyContent={'center'} color={'#fff'} mt={5}>
                  Why RetPro?
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#773FC6'}>
                <UnorderedList ml={10} spacing={10}>
                  <ListItem>work from the comfort of your home</ListItem>
                  <ListItem>offer virtual/in-person mentoring & guidance</ListItem>
                  <ListItem> connect & socialize with other RetPros & JunPros </ListItem>
                  <ListItem>enjoy superior quality of life post retirement</ListItem>
                </UnorderedList>
              </Text>
            </Stack>
          </Flex>
          <Flex p={10} flex={1} justify={'center'}>
            <Stack background={'#EFFFE7'} width={'504px'} height={'411px'} spacing={5} w={'70%'}>
              <Heading borderTopRadius={'20px'} height={20} align={'center'} background={'#46B40F'}>
                {' '}
                <Text justifyContent={'center'} color={'#fff'} mt={5}>
                  Why JunPro?
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#773FC6'}>
                <UnorderedList ml={10} spacing={10}>
                  <ListItem>work from the comfort of your homehire retired experts short or long-term</ListItem>
                  <ListItem>receive top notch mentorship & wisdom</ListItem>
                  <ListItem>pocket-friendly services that work for you</ListItem>
                  <ListItem>network & engage with RetPros</ListItem>
                </UnorderedList>
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Container>
      <Container borderRadius={'md'} border={'1px solid red'} height={'554px'} maxW={'7xl'} mt={40}>
        <Heading fontSize={'44px'}>
          Some real-life success stories to <hr /> get inspired by
        </Heading>
        <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide} />
        <AiOutlineArrowRight className='arrow next' onClick={nextSlide} />
        <Stack border={'2px solid red'} minH={'504px'} direction={{ base: 'column', md: 'row' }}>
          <Flex border={'2px solid red'} pt={10} flex={1} justify={'center'}>
            <Stack
              border={'2px solid red'}
              //   background={'#EDF3FF'}
              //   width={'100%'}
              //   height={'411px'}
              spacing={5}
              w={'80%'}
            >
              <Heading borderTopRadius={'20px'} align={'center'}>
                {' '}
                <Text justifyContent={'center'} color={'#101130'} fontSize={'20px'} mt={5}>
                  "No online course could have <br /> helped me this way"
                </Text>{' '}
              </Heading>
              <Text color={'#606176'} fontSize={'15px'}>
                "A RetPro helped me realize that my aspirations were leaning more towards Data sciences than what I am
                currently doing"
              </Text>
              <Flex align={'center'} mt={8} direction={'row'}>
                <Avatar spacing={10} src='Images/110.png' alt='name' mb={2} mr={5} />
                <Stack align={'center'}>
                  <Text color={'#101130'} fontWeight={1000}>
                    Milena Belmar
                  </Text>
                  <Text mt={'-10px'} fontSize={'sm'} color={'#606176'}>
                    Argentina
                  </Text>
                </Stack>
              </Flex>
            </Stack>
          </Flex>
          <Flex border={'2px solid red'} pt={10} flex={1} justify={'center'}>
            <Stack
              border={'2px solid red'}
              //   background={'#EFFFE7'}
              //   width={'504px'}
              //   height={'411px'}
              spacing={5}
              w={'80%'}
            >
              <Heading height={20} align={'center'}>
                {' '}
                <Text lineHeight={'28px'} fontSize={'20px'} color={'#101130'} mt={5}>
                  "I have been rewarded with both <br /> help and loyalty"
                </Text>{' '}
              </Heading>
              <Text fontSize={'15px'} color={'#606176'}>
                "The retired professional who is currently working with me to improve my language proficiency in French,
                is extremely punctual and passionate about teaching"
              </Text>
              <Flex align={'center'} direction={'row'}>
                <Avatar spacing={10} src='Images/Ellipse-38.png' alt='name' mb={2} mr={5} />
                <Stack align={'center'}>
                  <Text color={'#101130'} fontWeight={1000}>
                    Milena Belmar
                  </Text>
                  <Text mt={'-10px'} fontSize={'sm'} color={'#606176'}>
                    Argentina
                  </Text>
                </Stack>
              </Flex>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </div>
  );
};

export default React.memo(Home);
