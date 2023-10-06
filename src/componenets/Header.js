import React, { useState } from 'react';
import { Search2Icon, TriangleDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Tooltip,
} from '@chakra-ui/react';

const Header = () => {
  //   const [isHovering, setIsHovering] = useState(false);
  //   function handleMouseEnter(e) {
  //     console.log(e.target);
  //   }
  return (
    <>
      <Box
        position={'sticky'}
        top={0}
        zIndex={999}
        height={'100px'}
        justifyContent={'space-between'}
        width={'100%'}
        backgroundColor={'#EDEBF1'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-around'}>
          <Link display={{ md: 'flex' }} href={'/'} m={'20px'}>
            <img style={{ width: '160px', marginTop: '50px' }} src='Images/RBR Logo 1.png' alt='logo' />
          </Link>
          <Stack display={{ base: 'none', md: 'flex' }} mt={5} direction={'row'}>
            <InputGroup border={''}>
              <InputLeftElement pointerEvents='none'>
                <Search2Icon color='gray.700' />
              </InputLeftElement>
              <Input
                fontSize={'24px'}
                borderRadius={'2xl'}
                border={'1px solid #B668D3'}
                fontFamily={'inder'}
                type='tel'
                placeholder='Looking for...'
              />
            </InputGroup>
          </Stack>{' '}
          <Flex mt={5} alignItems={'center'} justifyContent={'space-evenly'}>
            <Stack display={{ base: 'none', md: 'flex' }} mr={15}>
              <Link href='/'>
                <Button fontFamily={'inder'} fontSize={'24px'} bg={'transparent'}>
                  {' '}
                  Home
                </Button>
              </Link>
            </Stack>

            <Button
              fontFamily={'inder'}
              fontSize={'24px'}
              display={{ base: 'none', md: 'flex' }}
              bg={'transparent'}
              mr={15}
            >
              EN+ <TriangleDownIcon />
            </Button>
            <Stack direction={'row'} spacing={3}>
              <Menu>
                <MenuButton
                  bgColor={'#D5C9E8'}
                  color={'#B668D3'}
                  as={Button}
                  rounded={'2xl'}
                  //   variant={'link'}
                  cursor={'pointer'}
                  minW={160}
                  fontSize={'24px'}
                  height={53}
                  fontFamily={'inder'}
                >
                  Login
                  <TriangleDownIcon />
                </MenuButton>
                <MenuList width={'80px'} border={'none'} backgroundColor={'transparent'}>
                  {/* <MenuDivider /> */}
                  <Flex mb={2}>
                    <Link href='/Register'>
                      <Tooltip
                        fontSize={'24px'}
                        color={'B668D3'}
                        backgroundColor={'#D5C9E8'}
                        label='Welcome the Retired pro!'
                        placement='left'
                      >
                        <Button
                          width={'155px'}
                          color={'B668D3'}
                          bgColor={'#D5C9E8'}
                          fontSize={'24px'}
                          fontFamily={'inder'}
                        >
                          {' '}
                          RetPro
                        </Button>
                      </Tooltip>
                    </Link>
                  </Flex>
                  <Link href='/Register'>
                    <Tooltip
                      fontSize={'24px'}
                      bgColor={'#D5C9E8'}
                      color={'B668D3'}
                      label='Our Junior Pro is Coming soon'
                      placement='left'
                    >
                      <Button
                        //   onMouseEnter={handleMouseEnter}
                        fontSize={'24px'}
                        isDisabled
                        width={'155px'}
                        color={'B668D3'}
                        bgColor={'#C7E2BC'}
                        fontFamily={'inder'}
                      >
                        JunPro
                      </Button>
                    </Tooltip>
                  </Link>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
