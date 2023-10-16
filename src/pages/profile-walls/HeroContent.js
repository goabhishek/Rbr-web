import {
  Flex,
  Button,
  Box,
  Heading,
  useColorModeValue,
  Divider,
  filter,
  Container,
  Text,
  Stack,
  Avatar,
  Image,
  Center,
  MenuButton,
} from '@chakra-ui/react';
import Sidebar from '../../componenets/Sidebar';
import { AvatarBsFillQuestionCircleFill, BsFillQuestionCircleFill } from 'react-icons/bs';
import HeroSidebar from './HeroSidebar';
// import { NewPost, DisplayPost, Suggestions } from 'features';
// import { flexMiddleContainerStyle, flexMiddleOuterContainerStyle, sortButtonsContainerStyle } from 'styles';
// import { Navigation, Footer, Sidebar } from 'components';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { changeSorting } from '../postsSlice';

function HeroContent() {
  //   const { posts, postSorting } = useSelector((state) => state.posts);
  //   const { authUser } = useSelector((state) => state.authentication);
  //   const dispatch = useDispatch();
  //   const [followingPosts, setFollowingPosts] = useState([]);

  //   useEffect(() => {
  //     const filteredPosts = posts.filter(
  //       (currPost) =>
  //         authUser.following.find((user) => user.username === currPost.username) ||
  //         authUser.username === currPost.username
  //     );
  //     switch (postSorting) {
  //       case 'trending':
  //         setFollowingPosts(
  //           filteredPosts.filter((post) => post.likes.likeCount > 0).sort((a, b) => b.likes.likeCount - a.likes.likeCount)
  //         );
  //         break;
  //       case 'latest':
  //         setFollowingPosts(filteredPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  //         break;
  //       default:
  //         setFollowingPosts(filteredPosts);
  //     }
  //   }, [authUser, posts, postSorting]);
  return (
    <Container maxW={'10*l'} height={'full'} width={'full'} backgroundColor={'#EDEBF1'}>
      {/* <Navigation /> */}
      <Flex flexDirection={'row'}>
        <Flex flexDirection={'column'}>
          <HeroSidebar />
          <Box display={{ base: 'none', md: 'inline' }}>
            <Center mt={24} py={6}>
              <Box
                maxW={'270px'}
                w={'full'}
                // bg={useColorModeValue('white', 'gray.800')}
                // boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}
              >
                <Image
                  borderRadius={16}
                  h={'270px'}
                  w={'300px'}
                  position={'absolute'}
                  src={'Images/white-curved1.png'}
                  objectFit='cover'
                  alt='#'
                />
                <Flex m={4} ml={4}>
                  <Avatar
                    size={'xl'}
                    color={'#67748E80'}
                    backgroundColor={'#fff'}
                    icon={<BsFillQuestionCircleFill />}
                    // src={'Images/questionIcon.png'}
                    // css={{
                    //   border: '2px solid white',
                    // }}
                  />
                </Flex>

                <Box>
                  <Stack align={'center'} mb={5}>
                    <Heading color={'#FFFFFF'} fontSize={24} fontWeight={700} fontFamily={'Abhaya Libre'}>
                      Download now to
                    </Heading>
                  </Stack>

                  <Stack direction={'row'} justify={'center'} spacing={6}></Stack>

                  <Button
                    ml={4}
                    w={'full'}
                    fontFamily={'Abhaya Libre'}
                    mt={2}
                    fontSize={24}
                    fontWeight={700}
                    lineHeight={15}
                    bg={'#FFFFFF'}
                    color={'#2D3748'}
                    rounded={'md'}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                      color: '#fff',
                      backgroundColor: '#2F327D',
                    }}
                  >
                    DOWNLOAD NOW
                  </Button>
                </Box>
              </Box>
            </Center>
          </Box>
        </Flex>

        <Flex flexDirection={'column'} w={'90%'} right={0} maxW={'6xl'} flex={1}>
          <Box
            m={4}
            // align={'center'}
            borderRadius={18}
            opacity={'60%'}
            w={'100%'}
            h='300px'
            // background: linear-gradient(136.64deg, #FF0080 1.59%, #7928CA 98.89%);

            bgGradient='linear-gradient(136.64deg, #FF0080 1.59%, #7928CA 98.89%)'
          >
            <Text fontSize={24} fontWeight={500} color={'#fff'} m={4} fontFamily={'Ubuntu'} alignItems={'start'}>
              My walls
            </Text>
          </Box>
          <Box
            zIndex={99}
            mt={-14}
            borderRadius={12}
            border={'border: 1.5px solid rgba(255, 255, 255, 1)'}
            width={'96%'}
            ml={12}
            height={'80px'}
            // backgroundColor={'rgba(255, 255, 255, 1)'}
            // bgGradient={'background: linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%),
            // linear-gradient(0deg, #FFFFFF, #FFFFFF);
            // '}
            bgGradient='linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)'
          >
            <Flex mt={2} flexDirection={'column'}>
              <Flex m={2} ml={8}>
                <Button as={Button} variant={'link'} cursor={'pointer'} w={6}>
                  <Avatar
                    // size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                </Button>
                <Stack ml={4} align={'center'}>
                  <Text fontFamily={'Ubuntu'} fontSize={'18px'} color={'#2F327D'} fontWeight={700}>
                    Alec Thompson
                  </Text>
                  <Text fontSize={'17px'} fontFamily={'Ubuntu'} fontWeight={500} mt={'-10px'} color={'#606176'}>
                    CEO / Co-Founder
                  </Text>
                </Stack>
                <Stack
                  display={{ base: 'none', md: 'inline-flex' }}
                  //   display={'inline-flex'}
                  flex={{ base: 1, md: 1 }}
                  justify={'flex-end'}
                  direction={'row'}
                  spacing={6}
                >
                  <Button
                    as={'a'}
                    fontSize={'16px'}
                    fontWeight={600}
                    color={'rgba(45, 55, 72, 1)'}
                    bg={'transparent'}
                    fontFamily={'Ubuntu'}
                    href={'#'}
                    _hover={{
                      bg: 'rgba(255, 255, 255, 1)',
                    }}
                    // href={'#'}
                  >
                    <Image m={2} w={4} src='Images/hexagon.png' />
                    OVERVIEW
                  </Button>
                  <Button
                    as={'a'}
                    // display={{ base: 'inline-flex', md: 'none' }}
                    fontSize={'16px'}
                    fontWeight={600}
                    color={'rgba(45, 55, 72, 1)'}
                    bg={'transparent'}
                    fontFamily={'Ubuntu'}
                    href={'#'}
                    _hover={{
                      bg: 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    <Image m={2} w={4} src='Images/file.png' />
                    TEAMS
                  </Button>
                  <Button
                    as={'a'}
                    // display={{ base: 'inline-flex', md: 'none' }}
                    fontSize={'16px'}
                    fontWeight={600}
                    color={'rgba(45, 55, 72, 1)'}
                    bg={'transparent'}
                    fontFamily={'Ubuntu'}
                    href={'#'}
                    _hover={{
                      bg: 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    <Image m={2} w={4} src='Images/settings.png' />
                    PROJECTS
                  </Button>
                </Stack>
              </Flex>
            </Flex>
          </Box>
          <Box
            zIndex={99}
            mt={10}
            borderRadius={12}
            border={'border: 1.5px solid rgba(255, 255, 255, 1)'}
            width={'90%'}
            ml={12}
            height={'70px'}
            // backgroundColor={'rgba(255, 255, 255, 1)'}
            // bgGradient={'background: linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%),
            // linear-gradient(0deg, #FFFFFF, #FFFFFF);
            // '}
            bgGradient='linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)'
          >
            <Button
              as={'a'}
              w={'300px'}
              //   border={'2px solid red'}
              borderBottom={'7px solid rgba(156, 163, 175, 1)'}
              //   borderBottomColor={''}
              m={4}
              ml={10}
              // display={{ base: 'inline-flex', md: 'none' }}
              fontSize={24}
              fontWeight={500}
              color={'rgba(156, 163, 175, 1)'}
              align={'center'}
              bg={'transparent'}
              fontFamily={'Ubuntu'}
              href={'#'}
              _hover={{
                transform: 'scale(1.1)',
                color: 'rgba(119, 63, 198, 1)',
                borderBottom: '7px solid rgba(119, 63, 198, 1)',
              }}
            >
              All
            </Button>
            <Button
              as={'a'}
              w={'300px'}
              borderBottom={'7px solid rgba(156, 163, 175, 1)'}
              // display={{ base: 'inline-flex', md: 'none' }}
              fontSize={24}
              fontWeight={500}
              color={'rgba(231, 56, 56, 1)'}
              align={'center'}
              bg={'transparent'}
              fontFamily={'Ubuntu'}
              href={'#'}
              _hover={{
                transform: 'scale(1.1)',
                color: 'rgba(119, 63, 198, 1)',
                borderBottom: '7px solid rgba(119, 63, 198, 1)',
              }}
            >
              Trending
              <Text color={'rgba(156, 163, 175, 1)'}>News</Text>
            </Button>
            <Button
              as={'a'}
              ml={4}
              w={'300px'}
              borderBottom={'7px solid rgba(156, 163, 175, 1)'}
              // display={{ base: 'inline-flex', md: 'none' }}
              fontSize={24}
              fontWeight={500}
              color={'rgba(156, 163, 175, 1)'}
              align={'center'}
              bg={'transparent'}
              fontFamily={'Ubuntu'}
              href={'#'}
              _hover={{
                transform: 'scale(1.1)',
                color: 'rgba(119, 63, 198, 1)',
                borderBottom: '7px solid rgba(119, 63, 198, 1)',
              }}
            >
              Surprise Me!
            </Button>
          </Box>
          <Box
            zIndex={99}
            mt={10}
            borderRadius={12}
            border={'border: 1.5px solid rgba(255, 255, 255, 1)'}
            width={'90%'}
            ml={12}
            height={'70px'}
            // backgroundColor={'rgba(255, 255, 255, 1)'}
            // bgGradient={'background: linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%),
            // linear-gradient(0deg, #FFFFFF, #FFFFFF);
            // '}
            bgGradient='linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)'
          >
            <Text>Name and Image</Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
export default HeroContent;
