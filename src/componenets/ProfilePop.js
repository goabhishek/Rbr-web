import { Button } from '@chakra-ui/react';
import React from 'react';

const ProfilePop = (props) => {
  return props.modalIsOpen ? (
    <div className='trainer-popup'>
      <div className='popupModel'>
        <img src='Images/image-143.png' alt='loading' />
        <p style={{ color: '#773FC6', lineHeight: '22px !', alignItems: 'center', height: '40px !', fontSize: '28px' }}>
          {' '}
          Logged in! Let’s build your <br /> profile now.
        </p>

        <div className='rightpopup'>
          {/* <div className='Topbar'>
				<AiOutlineCloseSquare className='CloseFontSize' onClick={() => props.showPopup(false)} />
			  </div> */}
          <div
            className='popup-content'
            style={{
              lineHeight: '22px !',
            }}
          >
            <br />
            <span style={{ color: '#5B5B5E', fontSize: '22px', lineHeight: '22px', width: '450px', fontWeight: '400' }}>
              To allow JunPros to find you and to connect with fellow RetPros, a profile that displays your information
              is important.
            </span>

            <Button mt={10} className='pop-btn' color={'#fff'} backgroundColor={'#773FC6'}>
              <a href='/ProfileFirst'>Enter profile details</a>
            </Button>
            {/* <ButtonOn className='joinBTN' name='Click to Join' link='/TrainerForm' /> */}
            {/* <button >Click to Join</button> */}
          </div>
        </div>
      </div>
      {/* <diod */}
    </div>
  ) : (
    ''
  );
};

export default ProfilePop;
