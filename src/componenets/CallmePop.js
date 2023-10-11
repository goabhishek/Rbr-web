import { Box, Image, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const CallmePop = (props) => {
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
        boxShadow={'3px 5px 10px 4px'}
      >
        <Image mt={-0} className='img-pop' src='Images/image-142.png' alt='loading' />

        <Box className='rightpopup'>
          <p
            className='popup-content'
            style={{ color: '#773FC6', height: '130px', fontFamily: 'Ubuntu', fontWeight: '500' }}
          >
            {' '}
            Sit tight! We have noted <br /> down your number.
          </p>
          {/* <div className='Topbar'>
		<AiOutlineCloseSquare className='CloseFontSize' onClick={() => props.showPopup(false)} />
	  </div> */}
          <div className='popup-content'>
            <span style={{ color: '#5B5B5E', fontSize: '20px', marginTop: '24px', fontFamily: 'Ubuntu' }}>
              Our customer happiness executive will call you <br /> within 24 hrs between 10 am - 6 pm
            </span>

            <Link mt={10} color={'white'} fontFamily={'Ubuntu'} fontSize={24} className='pop-btn' href='/Login'>
              Take me back
            </Link>

            {/* <ButtonOn className='joinBTN' name='Click to Join' link='/TrainerForm' /> */}
            {/* <button >Click to Join</button> */}
          </div>
        </Box>
      </Stack>
      {/* <diod */}
    </Stack>
  ) : (
    ''
  );
};

export default CallmePop;
