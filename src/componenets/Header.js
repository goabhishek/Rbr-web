import React from 'react';
import { PhoneIcon, Search2Icon, TriangleDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
} from '@chakra-ui/react';

const Header = () => {
  return (
    <>
      <Box
        position={'sticky'}
        top={0}
        zIndex={999}
        height={'90px'}
        justifyContent={'space-between'}
        width={'100%'}
        backgroundColor={'#EDEBF1'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-around'}>
          <Link display={{ md: 'flex' }} href={'/'} m={'20px'}>
            <img style={{ width: '120px', marginTop: '50px' }} src='Images/RBR Logo 1.png' alt='logo' />
          </Link>
          <Stack display={{ base: 'none', md: 'flex' }} mt={5} direction={'row'}>
            <InputGroup border={''}>
              <InputLeftElement pointerEvents='none'>
                <Search2Icon color='gray.700' />
              </InputLeftElement>
              <Input borderRadius={'2xl'} border={'1px solid #B668D3'} type='tel' placeholder='Looking for...' />
            </InputGroup>
          </Stack>{' '}
          <Flex mt={5} alignItems={'center'} justifyContent={'space-evenly'}>
            <Stack display={{ base: 'none', md: 'flex' }} mr={15}>
              <Link href='/'>
                <Button bg={'transparent'}> Home</Button>
              </Link>
            </Stack>

            <Button display={{ base: 'none', md: 'flex' }} bg={'transparent'} mr={15}>
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
                  fontSize={'18px'}
                  height={53}
                >
                  Login
                  <TriangleDownIcon />
                </MenuButton>
                <MenuList width={'80px'} border={'none'} backgroundColor={'transparent'}>
                  {/* <MenuDivider /> */}
                  <Flex mb={2}>
                    <Link href='/Register'>
                      <Button width={'155px'} color={'B668D3'} bgColor={'#D5C9E8'}>
                        {' '}
                        Retpro
                      </Button>
                    </Link>
                  </Flex>
                  <Link href='/Register'>
                    <Button width={'155px'} color={'B668D3'} bgColor={'#C7E2BC'}>
                      Junpro
                    </Button>
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
