import { Button } from '@chakra-ui/react';
import React from 'react';
import { redirect } from 'react-router-dom';

// import popuimg from '../Assets/trainer_popup.jpg';
// import ButtonOn from './ButtonOn';

const LoginPopup = (props) => {
  return props.modalIsOpen ? (
    <div className='trainer-popup'>
      <div className='popupModel'>
        <img className='img-pop' src='Images/image-142.png' alt='loading' />
        <p className='popup-content' style={{ color: '#773FC6', height: '250px' }}>
          {' '}
          Account created successfully
        </p>

        <div className='rightpopup'>
          {/* <div className='Topbar'>
            <AiOutlineCloseSquare className='CloseFontSize' onClick={() => props.showPopup(false)} />
          </div> */}
          <div className='popup-content'>
            <h1>
              Kudos! <br />
              <span style={{ color: '#5B5B5E', fontSize: '30px' }}>You have just begun your journey to greatness</span>
            </h1>

            <a className='pop-btn' href='/Login'>
              Login
            </a>

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

export default LoginPopup;
