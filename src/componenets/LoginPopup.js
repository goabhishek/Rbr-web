import { Heading, Image, Link, Stack } from '@chakra-ui/react';
import React from 'react';

// import popuimg from '../Assets/trainer_popup.jpg';
// import ButtonOn from './ButtonOn';

const LoginPopup = (props) => {
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

        <div className='rightpopup'>
          <p
            className='popup-content'
            style={{ color: '#773FC6', height: '130px', fontFamily: 'Ubuntu', fontWeight: '700', fontSize: '32px' }}
          >
            {' '}
            Account created successfully
          </p>
          {/* <div className='Topbar'>
            <AiOutlineCloseSquare className='CloseFontSize' onClick={() => props.showPopup(false)} />
          </div> */}
          <div className='popup-content'>
            <Heading color={'#5B5B5E'} mt={-4} fontSize={44}>
              Kudos! <br />
              <span style={{ color: '#5B5B5E', fontSize: '20px', marginTop: '10px' }}>
                You have just begun your journey to greatness
              </span>
            </Heading>

            <Link width={64} fontSize={24} mt={10} color={'white'} className='pop-btn' href='/Login'>
              Login
            </Link>

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

export default LoginPopup;
