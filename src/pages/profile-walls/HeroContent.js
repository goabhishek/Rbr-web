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
    <Container maxW={'10*l'} width={'full'} backgroundColor={'#EDEBF1'}>
      {/* <Navigation /> */}
      <Flex border={'2px solid red'} flexDirection={'row'}>
        <Flex flexDirection={'column'}>
          <HeroSidebar />
          <Box>
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

        <Flex w={'90%'} right={0} maxW={'6xl'} flex={1} border={'2px solid red'}>
          <Box
            m={4}
            // align={'center'}
            borderRadius={18}
            opacity={'60%'}
            border={'2px solid red'}
            w={'100%'}
            h='300px'
            bgGradient='linear(to-l, #FF0080, #7928CA)'
          >
            <Text fontSize={24} fontWeight={500} color={'#fff'} m={4} fontFamily={'Ubuntu'} alignItems={'start'}>
              My walls
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
export default HeroContent;
