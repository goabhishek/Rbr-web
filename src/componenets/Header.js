import React from 'react';
import { Search2Icon, TriangleDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Input,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Box height={'90px'} justifyContent={'space-between'} width={'100%'} backgroundColor={'#EDEBF1'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-around'}>
          <Link to={'/'} m={'20px'}>
            <img style={{ width: '120px', marginTop: '50px' }} src='Images/RBR Logo 1.png' alt='logo' />
          </Link>
          <Stack mt={5} direction={'row'} borderRadius={'3xl'} border={'1px solid #B668D3'}>
            <Search2Icon m={3} />
            {/* <input
              style={{
                backgroundColor: 'ButtonFace',
                border: '1px solid #B668D3',
                borderRadius: '10%',
                height: '40px',
                border: 'none',
                width: 170,
              }}
              type='text'
              placeholder='Looking for...'
            /> */}

            <Input
              htmlSize={12}
              width={170}
              border={'none'}
              color={'#A0AEC0'}
              height={'40px'}
              placeholder='Looking for...'
              size='md'
            />
          </Stack>{' '}
          <Flex mt={5} alignItems={'center'} justifyContent={'space-evenly'}>
            <Stack mr={15}>
              <Button bg={'transparent'}> Home</Button>
            </Stack>
            <Button bg={'transparent'} mr={15}>
              EN+ <TriangleDownIcon />
            </Button>
            <Stack direction={'row'} spacing={3}>
              <Menu>
                <MenuButton
                  bgColor={'#D5C9E8'}
                  color={'#B668D3'}
                  as={Button}
                  rounded={'3xl'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={150}
                  fontSize={'18px'}
                  height={50}
                >
                  Login
                  <TriangleDownIcon />
                </MenuButton>
                <MenuList backgroundColor={'transparent'}>
                  {/* <MenuDivider /> */}
                  <MenuItem>
                    <Button color={'B668D3'} bgColor={'#D5C9E8'}>
                      {' '}
                      RetPro
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button color={'B668D3'} bgColor={'#C7E2BC'}>
                      JunPro
                    </Button>
                  </MenuItem>
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
