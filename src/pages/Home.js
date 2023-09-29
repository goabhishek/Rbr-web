import React, { useRef } from 'react';
import { BsPerson } from 'react-icons/bs';
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
  Box,
  StatNumber,
  StatLabel,
  Stat,
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
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={2}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SimpleGrid height={'100vh'} backgroundColor={'#F8F8F88A'} m={8} columns={{ base: 1, md: 2 }}>
            <Flex justifyContent={'center'} position={'relative'} flexWrap={'wrap'} justify={'center'} align={'center'}>
              <Heading mt={-14} color={'#2F327D'} fontSize={74}>
                The world's only platform and community for retired professionals
              </Heading>
            </Flex>
            {/* <Center width={'1000px'} border={'2px solid red'}>
              <Stack>
                <Heading
                  flexWrap={'wrap'}
                  position={'relative'}
                  fontSize={'64px'}
                  lineHeight={'70px'}
                  fontWeight={'700'}
                  color={'#101130'}
                >
                  The world's only platform and community for retired professionals
                </Heading>
              </Stack>
            </Center> */}
            <Flex position={'relative'} flexWrap={'wrap'}>
              <Stack display={{ base: 'none', md: 'flex' }} align={'center'}>
                <Flex flexWrap={'wrap'}>
                  <Stack
                    ml={'500px'}
                    mt={'240px'}
                    height={'550px'}
                    width={'250px'}
                    roundedLeft={'full'}
                    position={'relative'}
                    backgroundColor={'#46B40F40'}
                  ></Stack>
                  <Stack
                    mt={'480px'}
                    zIndex={'99'}
                    position={'absolute'}
                    ml={'120px'}
                    // className='image'
                    style={{
                      height: '20vh',

                      objectFit: 'cover',
                      filter: 'brightness(1)',
                    }}
                  >
                    <Stat
                      px={{ base: 2, md: 4 }}
                      py={'5'}
                      ml={4}
                      shadow={'xl'}
                      //   borderColor={useColorModeValue('gray.800', 'gray.500')}
                      backgroundColor={'#FFFFFF'}
                      rounded={'2xl'}
                    >
                      <Flex ml={4} justifyContent={'space-between'}>
                        <Box
                          height={12}
                          width={12}
                          rounded={'3xl'}
                          my={'auto'}
                          backgroundColor={'#F9AE34'}
                          alignContent={'center'}
                        >
                          <Image height={12} width={12} src='/Images/Outline.png'></Image>
                          {/* {<BsPerson size={'3em'} />} */}
                        </Box>
                        <Box pl={{ base: 2, md: 4 }}>
                          <StatLabel fontSize={'2xl'} fontWeight={'medium'}>
                            100,000+
                          </StatLabel>
                          <StatNumber fontSize={'2xm'} fontWeight={'medium'} isTruncated>
                            Connections
                          </StatNumber>
                        </Box>
                      </Flex>
                    </Stat>
                    <Box
                      //   position={'relative'}
                      mt={-6}
                      width={14}
                      backgroundColor={'#B8DCFF'}
                      height={14}
                      rounded={'full'}
                    ></Box>
                  </Stack>
                  <Image
                    mt={8}
                    position={'absolute'}
                    ml={56}
                    className='image'
                    style={{
                      height: '10vh',

                      objectFit: 'cover',
                      filter: 'brightness(1)',
                    }}
                    src='Images/14.png'
                    alt='slides'
                  />

                  <Image
                    mt={14}
                    ml={36}
                    position={'absolute'}
                    className='image'
                    style={{
                      height: '85vh',

                      objectFit: 'cover',
                      filter: 'brightness(1)',
                    }}
                    src='Images/13.png'
                    alt='slides'
                  />
                </Flex>
              </Stack>
              {/* <div className='semi-circle_one'></div> */}
            </Flex>
          </SimpleGrid>
        </SwiperSlide>
        <SwiperSlide>
          <Stack m={2} borderRadius={'10%'}>
            <img
              className='image'
              style={{
                height: '85vh',
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
      <Stack mt={-14} backgroundColor={'#EDEBF1'}>
        <Container maxW={'7xl'} mb={10} mt={28}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            <Stack spacing={10}>
              <Heading fontSize={42} color={'#2F327D'}>
                Where young minds meet industrious retirees
              </Heading>

              <Stack
                maxWidth={'499px'}
                divider={<StackDivider borderColor={useColorModeValue('#606176', 'gray.700')} />}
              >
                <Text align={'justify'} fontSize={20}>
                  Retired professionals have a wealth of knowledge, wisdom and skills that can be beneficial to
                  currently employed professionals. Retired But Ready is where this juncture is made possible.
                </Text>
              </Stack>
              <Link href='/Register'>
                <Button
                  width={'220px'}
                  rounded={'full'}
                  height={'70px'}
                  // px={6}
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
        {/* <Container
          backgroundColor={'#6300FF0F'}
          borderRadius={'md'}
          border={'1px solid #6300FF0F'}
          height={'600px'}
          maxW={'8xl'}
          mt={24}
        >
          <Flex align={'center'} justify={'center'}>
            <Grid
              // className='retpro_spsl'
              templateColumns={{
                base: 'repeat(1, 1fr)',
                // sm: 'repeat(2, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
            >
              <GridItem colSpan={1}>
                <VStack spacing={4}>
                  <Heading fontSize={44} fontWeight='700' color={'#2F327D'}>
                    Introducing
                  </Heading>
                  <Heading fontSize={112} fontWeight='1000' color={'#773FC6'}>
                    RetPro
                  </Heading>
                  <Text align={'center'} color={'#2F327D'} fontSize={44} fontWeight={'700'}>
                    for retired professionals
                  </Text>
                </VStack>
              </GridItem>
              <GridItem>
                <Center>
                  <Link href='/Register'>
                    <Button
                      height={'90px'}
                      width={'292px'}
                      rounded={'2xl'}
                      colorScheme={''}
                      bg={'#773FC6'}
                      fontSize={'30px'}
                      fontWeight={'700'}
                    >
                      Start your journey
                    </Button>
                  </Link>
                </Center>
              </GridItem>
            </Grid>
          </Flex>
        </Container> */}
        <Stack
          ml={'30px'}
          marginRight={4}
          mt={20}
          backgroundColor={'#6300FF0F'}
          maxW={'full'}
          minH={'90vh'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex p={6} flexWrap={'wrap'} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={2} w={'90%'} maxW={'lg'}>
              <VStack spacing={6}>
                <Heading fontSize={44} fontWeight='700' color={'#2F327D'}>
                  Introducing
                </Heading>
                <Heading fontSize={112} fontWeight='1000' color={'#773FC6'}>
                  RetPro
                </Heading>
                <Text align={'center'} color={'#2F327D'} fontSize={44} fontWeight={'700'}>
                  for retired professionals
                </Text>
              </VStack>
            </Stack>
          </Flex>
          <Flex justify={'center'} flex={1}>
            <Center>
              <Link href='/Register'>
                <Button
                  height={'90px'}
                  width={'292px'}
                  rounded={'2xl'}
                  colorScheme={''}
                  bg={'#773FC6'}
                  fontSize={'30px'}
                  fontWeight={'700'}
                >
                  Start your journey
                </Button>
              </Link>
            </Center>
          </Flex>
        </Stack>
        {/* <Container
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
            <Center mt={'80px'}>
              <Link href='/Register'>
                <Button
                  height={'90px'}
                  width={'292px'}
                  rounded={'2xl'}
                  colorScheme={''}
                  bg={'#46B40F'}
                  fontSize={'30px'}
                  fontWeight={'700'}
                >
                  Start your journey
                </Button>
              </Link>
            </Center>
          </GridItem>
          <GridItem>
            <Flex>
              <VStack ml={'20px'} spacing='15px'>
                <Heading fontSize={44} fontWeight='700' color={'#2F327D'}>
                  Currently working?
                </Heading>
                <Heading fontSize={120} fontWeight='1000' color={'#46B40F'}>
                  JunPro
                </Heading>
                <Text fontSize={44} fontWeight={'700'}>
                  for employed professionals
                </Text>
              </VStack>
            </Flex>
          </GridItem>
        </Grid>
      </Container> */}
        <Container borderRadius={'md'} height={'50px'} maxW={'6xl'} mt={24}>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 2fr)',
              //   sm: 'repeat(2, 1fr)',
            }}
          >
            <GridItem align={'start'} colSpan={1}>
              <Text fontWeight={'bold'} fontSize={44} color={'#2F327D'}>
                Ask us how we are transforming lives.
              </Text>
            </GridItem>
            <GridItem align={'center'}>
              <Button
                m={2}
                fontSize={'20px'}
                border={'1px solid #2F327D'}
                borderRadius={'3xl'}
                height={'48px'}
                width={'250px'}
              >
                Let's Chat
              </Button>
              <Button
                m={2}
                fontSize={'20px'}
                // ml={'30px'}
                border={'1px solid #46B40F'}
                borderRadius={'3xl'}
                height={'48px'}
                width={'250px'}
              >
                Request Callback
              </Button>
            </GridItem>
          </Grid>
        </Container>
        <Container position={'relative'} overflow={'hidden'} height={'554px'} maxW={'7xl'} mt={44}>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            mt={'50px'}
          >
            <GridItem colSpan={1} justifyContent={'center'}>
              <Image src='Images/Group-114.png' alt='oldman' />
            </GridItem>
            <Flex align={'center'} direction={'column'}>
              <Heading mr={20} color={'#2F327D'} fontWeight={'bold'} fontSize={44}>
                So much you can do with{' '}
              </Heading>

              <br />
              <GridItem mr={20} height={'64px'} width={'140px'}>
                <img src='Images/Ret-pro-logo 2.png' alt='' />
              </GridItem>
              <GridItem mr={20}>
                <Text fontSize={20} color={'#2F327D'}>
                  (your skills are all you need to begin)
                </Text>
              </GridItem>
              <GridItem flexWrap={'wrap'} width={700} mt={12} justifyContent={'start'}>
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
              <Heading mr={20} color={'#2F327D'} fontWeight={'bold'} fontSize={44}>
                Fastrack your career with{' '}
              </Heading>

              <br />
              <GridItem mr={20} height={'64px'} width={'140px'}>
                <img src='Images/JunPro-2.png' alt='' />
              </GridItem>
              <GridItem mr={20}>
                <Text fontSize={20} color={'#000000'}>
                  (your skills are all you need to begin)
                </Text>
              </GridItem>
              <GridItem width={700} mt={12} justifyContent={'center'}>
                <img src='Images/Group-626024.png' alt='' />
              </GridItem>
            </Flex>
            <GridItem width={'308px'} colSpan={1} justifyContent={'center'}>
              <Image src='Images/How-it-works.png' alt='oldman' />
            </GridItem>
          </Grid>
        </Container>{' '}
        <Container overflow={'hidden'} align={'center'} maxW={'9xl'} mt={20}>
          <Heading display={'inline-block'} align={'center'} color={'#2F327D'} width={'608px'}>
            Meet the <span style={{ color: '#773FC6', fontSize: '55px' }}>RetPro </span>
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
                <Text fontSize='24px' fontWeight={800} maxW={190} color={'#2F327D'} mb={4}>
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
                <Text fontSize='24px' fontWeight={800} maxW={190} color={'#2F327D'} mb={4}>
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
                <Text fontSize='24px' fontWeight={800} maxW={190} color={'#2F327D'} mb={4}>
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
                <Text fontSize='24px' fontWeight={800} maxW={190} color={'#2F327D'} mb={4}>
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
        <Container mt={20} position={'relative'} borderRadius={'md'} maxW={'8xl'}>
          <Center>
            <Heading align={'center'} width={'700px'} lineHeight={'56px'} fontSize={'44px'} color={'#2F327D'}>
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
                <Text fontSize={20} color={'#773FC6'}>
                  <UnorderedList ml={10} spacing={6}>
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
                <Text fontSize={20} color={'#773FC6'}>
                  <UnorderedList ml={10} spacing={6}>
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
              <Heading color={'#2F327D'} fontSize={44}>
                Some real-life success stories to get inspired by
              </Heading>
              <Flex gap={30}>
                <ArrowBackIcon
                  cursor={'pointer'}
                  color={'#2F327D'}
                  height={50}
                  width={30}
                  onClick={() => SlideRef.current.swiper.slideNext()}
                />
                <ArrowForwardIcon
                  cursor={'pointer'}
                  color={'#2F327D'}
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
                        <Stack spacing={10} w={'90%'}>
                          <Heading lineHeight={'40px'} align={'start'}>
                            {' '}
                            <Text fontWeight={500} justifyContent={'center'} color={'#2F327D'} fontSize={'35px'} mt={5}>
                              " {slider.HeadFont}"
                            </Text>{' '}
                          </Heading>
                          <Text color={'#606176'} fontSize={20}>
                            "A RetPro helped me realize that my aspirations were leaning more towards Data sciences than
                            what I am currently doing"
                          </Text>
                          <Flex align={'center'} mr={8} direction={'row'}>
                            <Avatar width={'80px'} height={'70px'} spacing={20} src={slider.UserDp} alt='name' m={5} />
                            <Stack align={'center'}>
                              <Text fontSize={20} color={'#2F327D'} fontWeight={1000}>
                                Milena Belmar
                              </Text>
                              <Text fontSize={14} mt={'-10px'} color={'#606176'}>
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
      </Stack>
    </div>
  );
};

export default React.memo(Home);
