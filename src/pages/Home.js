import React, { useRef } from 'react';

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
  Link,
} from '@chakra-ui/react';

import {} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const Home = () => {
  //   const handleNext = () => {
  //     SlideRef.current.swiper.SlideNext();
  //   };
  const SlideRef = useRef();
  //   const handlePrev = () => {
  //     SlideRef.current.swiper.SlidePrev();
  //   };

  const StoriesSliderData = [
    {
      HeadFont: 'No online course could have helped me this way',
      Text: 'A RetPro helped me realize that my aspirations were leaning more towards Data sciences than what I am currently doing',
      UserDp: 'Images/Ellipse-38.png',
      UserName: 'Wilson Thai',
      UserAddr: 'Ontario, Canada',
      UserStar: '',
    },
    {
      HeadFont: 'I have been rewarded with both help and loyalty',
      Text: 'The retired professional who is currently working with me to improve my language proficiency in French, is extremely punctual and passionate about teaching',
      UserDp: 'Images/Ellipse-39.png',
      UserName: 'Milena Belmar',
      UserAddr: 'Argentina',
      UserStar: '',
    },
    {
      HeadFont: 'No online course could have helped me this way',
      Text: 'A RetPro helped me realize that my aspirations were leaning more towards Data sciences than what I am currently doing',
      UserDp: 'Images/Ellipse-38.png',
      UserName: 'Wilson Thai',
      UserAddr: 'Ontario, Canada',
      UserStar: '',
    },
    {
      HeadFont: 'I have been rewarded with both help and loyalty',
      Text: 'The retired professional who is currently working with me to improve my language proficiency in French, is extremely punctual and passionate about teaching',
      UserDp: 'Images/Ellipse-39.png',
      UserName: 'Milena Belmar',
      UserAddr: 'Argentina',
      UserStar: '',
    },
  ];

  return (
    <div style={{ backgroundColor: '#EDEBF1' }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SimpleGrid mt={10} columns={{ base: 1, md: 2 }}>
            <Center>
              <Heading
                position={'relative'}
                flexWrap={'wrap'}
                fontSize={'40px'}
                lineHeight={'60px'}
                fontWeight={'700'}
                color={'#101130'}
              >
                The world's only exclusive platform and community for retired professionals
              </Heading>
            </Center>

            <Flex flexWrap={'wrap'}>
              <Stack position={'absolute'}>
                <img
                  className='image'
                  style={{
                    height: '80vh',
                    objectFit: 'cover',
                    filter: 'brightness(1)',
                  }}
                  src='Images/Image and card.png'
                  alt='slides'
                />
              </Stack>
              <div className='semi-circle_one'></div>
            </Flex>
          </SimpleGrid>
        </SwiperSlide>
        <SwiperSlide>
          <Stack m={5} borderRadius={'10%'}>
            <img
              className='image'
              style={{
                height: '80vh',
                objectFit: 'cover',
                filter: 'brightness(1)',
              }}
              src='Images/Mask-group.png'
              alt='slides'
            />
          </Stack>
        </SwiperSlide>
        ...
      </Swiper>
      {/* <div className='scroll-parent'>
        <div className='scroll-element primary'>
          <SimpleGrid mt={10} columns={{ base: 1, md: 2 }}>
            <Center>
              <Heading fontSize={'40px'} lineHeight={'60px'} fontWeight={'600'} color={'#101130'}>
                The world's only exclusive platform and community for retired professionals
              </Heading>
            </Center>
            <Flex>
              <Stack display={{ base: 'none', md: 'flex' }}>
                <img
                  className='image'
                  style={{
                    height: '80vh',
                    objectFit: 'cover',
                    filter: 'brightness(1)',
                  }}
                  src='Images/Image and card.png'
                  alt='slides'
                />
              </Stack>
            </Flex>
          </SimpleGrid>
        </div>
        <div className='scroll-element secondary'>
          <Stack m={5} borderRadius={'10%'}>
            <img
              className='image'
              style={{
                height: 'full',
                objectFit: 'cover',
                filter: 'brightness(1)',
              }}
              src='Images/Mask-group.png'
              alt='slides'
            />
          </Stack>
        </div>
      </div> */}
      <Container maxW={'7xl'} py={5} mb={20} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={10}>
            <Heading color={'#773FC6'}>Where young minds meet industrious retirees</Heading>

            <Stack divider={<StackDivider borderColor={useColorModeValue('#606176', 'gray.700')} />}>
              <Text>
                Retired professionals have a wealth of knowledge, wisdom and skills that can be beneficial to currently
                employed professionals. RBR is where this juncture is made possible.
              </Text>
            </Stack>
            <Link href='/Register'>
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
            </Link>
          </Stack>

          <Flex>
            <video autoPlay controls poster='Images/Mask-group.png'>
              <source src='<https://ruttl.com/assets/video/index-hero.webm>' type='video/mp4' />
            </video>
          </Flex>
        </SimpleGrid>
      </Container>
      <div className='semi-circle'></div>
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

            md: 'repeat(2, 1fr)',
          }}
          mt={'150px'}
        >
          <GridItem colSpan={1}>
            <VStack alignItems='center' spacing={4}>
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
          <GridItem>
            <Center mt={'30px'}>
              <Link href='/Register'>
                <Button
                  height={'90px'}
                  width={'292px'}
                  rounded={'2xl'}
                  colorScheme={''}
                  bg={'#773FC6'}
                  fontSize={'24px'}
                  fontWeight={'500'}
                >
                  Start your journey
                </Button>
              </Link>
            </Center>
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
            md: 'repeat(2, 1fr)',
          }}
          gap={10}
          mt={'130px'}
        >
          <GridItem colSpan={1}>
            <Center mt={'30px'}>
              <Link href='/Register'>
                <Button
                  height={'90px'}
                  width={'292px'}
                  rounded={'2xl'}
                  colorScheme={''}
                  bg={'#46B40F'}
                  fontSize={'24px'}
                  fontWeight={'500'}
                >
                  Start your journey
                </Button>
              </Link>
            </Center>
          </GridItem>
          <GridItem>
            <Flex>
              <VStack ml={'20px'} spacing='15px'>
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
          }}
        >
          <GridItem colSpan={1}>
            <Text fontWeight={'bold'} fontSize={'25px'} color={'#2F327D'}>
              Ask us how we are transforming lives.
            </Text>
          </GridItem>
          <GridItem>
            <Button ml={'30px'} border={'1px solid #2F327D'} borderRadius={'3xl'} height={'48px'} width={'250px'}>
              Let's Chat
            </Button>
            <Button ml={'30px'} border={'1px solid #46B40F'} borderRadius={'3xl'} height={'48px'} width={'250px'}>
              Request Callback
            </Button>
          </GridItem>
        </Grid>
      </Container>
      <Container overflow={'hidden'} height={'554px'} maxW={'7xl'} mt={20}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          mt={'50px'}
        >
          <GridItem colSpan={1} justifyContent={'center'} mt={'50px'}>
            <Image src='Images/Group-114.png' alt='oldman' />
          </GridItem>
          <Flex align={'center'} direction={'column'}>
            <Heading mr={20} color={'#2F327D'} fontWeight={'bold'} fontSize={'22px'}>
              So much you can do with{' '}
            </Heading>

            <br />
            <GridItem mr={20} height={'64px'} width={'140px'}>
              <img src='Images/Ret-pro-logo 2.png' alt='' />
            </GridItem>
            <GridItem mr={20}>
              <Text fontSize={'17px'} color={'#000000'}>
                (your skills are all you need to begin)
              </Text>
            </GridItem>
            <GridItem flexWrap={'wrap'} width={700} mt={24} justifyContent={'start'}>
              <img src='Images/Group-626024.png' alt='' />
            </GridItem>
          </Flex>
        </Grid>
      </Container>
      <Container overflow={'hidden'} height={'554px'} maxW={'6xl'} mt={20}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          mt={'50px'}
        >
          <Flex flexWrap={'wrap'} direction={'column'} justifyContent={'start'} align={'center'}>
            <Heading mr={20} color={'#2F327D'} fontWeight={'bold'} fontSize={'22px'}>
              Fastrack your career with{' '}
            </Heading>

            <br />
            <GridItem mr={20} height={'64px'} width={'140px'}>
              <img src='Images/JunPro-2.png' alt='' />
            </GridItem>
            <GridItem mr={20}>
              <Text fontSize={'17px'} color={'#000000'}>
                (your skills are all you need to begin)
              </Text>
            </GridItem>
            <GridItem width={700} mt={24} justifyContent={'center'}>
              <img src='Images/Group-626024.png' alt='' />
            </GridItem>
          </Flex>
          <GridItem width={'308px'} colSpan={1} justifyContent={'center'} mt={'50px'}>
            <Image src='Images/How-it-works.png' alt='oldman' />
          </GridItem>
        </Grid>
      </Container>{' '}
      <Container overflow={'hidden'} align={'center'} maxW={'9xl'} mt={40}>
        <Heading display={'inline-block'} align={'center'} color={'#2F327D'} width={'608px'}>
          Meet the <span style={{ color: '#773FC6', fontSize: '55px' }}>RetPro</span>
          area experts
        </Heading>
        <Flex flexWrap={'wrap'} justifyContent={'space-evenly'} mt={8}>
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
      <Container position={'relative'} borderRadius={'md'} maxW={'8xl'}>
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
      <div>
        <Container overflow={'hidden'} maxW={'6xl'} position={'relative'} mt={20}>
          <Flex justifyContent={'space-between'} flex={1}>
            <Heading fontSize={'44px'}>
              Some real-life success stories to <hr /> get inspired by
            </Heading>
            <Flex gap={30}>
              <ArrowBackIcon
                cursor={'pointer'}
                height={50}
                width={30}
                onClick={() => SlideRef.current.swiper.slideNext()}
              />
              <ArrowForwardIcon
                cursor={'pointer'}
                height={50}
                width={30}
                onClick={() => SlideRef.current.swiper.slidePrev()}
              />
            </Flex>
          </Flex>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={70}
            slidesPerView={2}
            navigation={false}
            className={'mySwiper'}
            ref={SlideRef}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {StoriesSliderData.map((slider, indexs) => {
              return (
                <SwiperSlide key={indexs}>
                  <Stack direction={{ base: 'row', md: 'row' }}>
                    <Flex pt={10} flex={1} justify={'start'}>
                      <Stack spacing={10} w={'80%'}>
                        <Heading lineHeight={'30px'} align={'start'}>
                          {' '}
                          <Text fontWeight={500} justifyContent={'center'} color={'#101130'} fontSize={'28px'} mt={5}>
                            " {slider.HeadFont}"
                          </Text>{' '}
                        </Heading>
                        <Text color={'#606176'} fontSize={'18px'}>
                          "A RetPro helped me realize that my aspirations were leaning more towards Data sciences than
                          what I am currently doing"
                        </Text>
                        <Flex align={'center'} mr={8} direction={'row'}>
                          <Avatar width={'70px'} height={'70px'} spacing={20} src={slider.UserDp} alt='name' m={5} />
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
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </div>
    </div>
  );
};

export default React.memo(Home);
