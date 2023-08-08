import React from 'react';

const PassResetPop = (props) => {
  return props.modalIsOpen ? (
    <div className='trainer-popup'>
      <div className='popupModel'>
        <img className='img-pop' src='Images/image-142.png' alt='loading' />

        <div className='rightpopup'>
          <p className='popup-content' style={{ color: '#773FC6', height: '130px' }}>
            {' '}
            Password Reset Successfully
          </p>
          {/* <div className='Topbar'>
		  <AiOutlineCloseSquare className='CloseFontSize' onClick={() => props.showPopup(false)} />
		</div> */}
          <div className='popup-content'>
            <h3>
              Time for some hustle!
              <br />
              <span style={{ color: '#5B5B5E', fontSize: '18px' }}>Login again with your new password to enter </span>
            </h3>

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

export default PassResetPop;
