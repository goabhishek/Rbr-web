import {
  Avatar,
  Flex,
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuDivider,
  MenuItem,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fontAwesomeIconStyle } from 'styles';
import { deleteComment } from '../postsSlice';
import { CommentModal } from './CommentModal';

function Comment({ comment, postId }) {
  const { users } = useSelector((state) => state.users);
  const [userDetails, setUserDetails] = useState(null);
  const { authToken, authUser } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  useEffect(() => setUserDetails(users.filter((user) => user.username === comment.username)[0]), [users]);

  return (
    <Flex w='100%' marginTop='1' padding='2'>
      {userDetails && (
        <VStack width='100%'>
          <Flex alignSelf='flex-start' flexWrap='wrap' alignItems='center' columnGap='1' width='90%'>
            <Link to={`/profile/${userDetails.email}`}>
              <Flex>
                <Avatar
                  src={userDetails.email === authUser.email ? authUser.avatarUrl : userDetails.avatarUrl}
                  alt='profile-image'
                  size='md'
                  marginRight='2'
                  display='block'
                  name={userDetails.name}
                />
                <Flex flexDirection='column'>
                  <Flex columnGap='10px'>
                    <Text fontWeight='bold'>{`${userDetails.name}`}</Text>
                  </Flex>
                  <Text fontSize='sm'> @{userDetails.email}</Text>{' '}
                </Flex>
              </Flex>
            </Link>

            {authUser.email === userDetails.email && (
              <Menu>
                <MenuButton pos='absolute' right='8' bg='transparent' color='gray.700' _hover={{ bg: 'transparent' }}>
                  <FontAwesomeIcon icon='ellipsis-h' {...fontAwesomeIconStyle} />
                </MenuButton>
                <MenuList minW='8rem'>
                  <MenuGroup>
                    <CommentModal comment={comment} editCommentContent={true} postId={postId} />
                    <MenuDivider />
                    <MenuItem
                      _hover={{ bg: 'gray.300' }}
                      bg='inherit'
                      fontSize='md'
                      onClick={() => {
                        dispatch(
                          deleteComment({
                            postId,
                            commentId: comment._id,
                            authToken,
                          })
                        );
                        toast.success('Comment deleted!');
                      }}
                    >
                      Delete
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            )}
          </Flex>
          <Text width='100%'>{comment.text}</Text>
        </VStack>
      )}
    </Flex>
  );
}

export { Comment };
