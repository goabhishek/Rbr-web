import { Box, Button, Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';

const ProfilePop = (props) => {
  return props.modalIsOpen ? (
    <Stack
      mt={-2}
      position={'fixed'}
      zIndex={100}
      width={'100%'}
      height={'80%'}
      display={'flex'}
      justifyContent={'center'}
      align={'center'}
    >
      <Stack
        position={'relative'}
        display={'flex'}
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'80%'}
        height={'90%'}
        backgroundColor={'#fff'}
        borderRadius={'5px'}
        boxShadow={'5px 5px 10px 4px'}
      >
        <Image mt={-0} height={56} src='Images/image-143.png' alt='loading' />
        <Heading
          fontSize={{ base: '24', sm: '24', md: '34' }}
          align={'center'}
          fontWeight={700}
          fontFamily={'Ubuntu'}
          color={'#773FC6'}
        >
          {' '}
          Logged in!Let’s build your
          <br /> profile now.
        </Heading>

        <div className='rightpopup'>
          {/* <div className='Topbar'>
				<AiOutlineCloseSquare className='CloseFontSize' onClick={() => props.showPopup(false)} />
			  </div> */}
          <div className='popup-content'>
            <Box
              width={{ base: '300px', sm: '250px', md: '400px' }}
              fontSize={{ base: '18px', sm: '18px', md: '22px' }}
              style={{
                color: '#5B5B5E',
                fontSize: '18px',
                lineHeight: '30px',

                fontWeight: '400',
                marginTop: '6px',
              }}
            >
              To allow JunPros to find you and to connect with fellow RetPros, a profile that displays your information
              is important.
            </Box>

            <Button width={'auto'} mt={4} className='pop-btn' color={'#fff'} backgroundColor={'#773FC6'}>
              <a style={{ fontSize: '24px' }} href='/HeroContent'>
                Enter profile details
              </a>
            </Button>
            {/* <ButtonOn className='joinBTN' name='Click to Join' link='/TrainerForm' /> */}
            {/* <button >Click to Join</button> */}
          </div>
        </div>
      </Stack>
      {/* <diod */}
    </Stack>
  ) : (
    ''
  );
};

export default ProfilePop;
