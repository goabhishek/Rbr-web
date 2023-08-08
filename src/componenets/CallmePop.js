import React from 'react';

const CallmePop = (props) => {
  return props.modalIsOpen ? (
    <div className='trainer-popup'>
      <div className='popupModel'>
        <img className='img-pop' src='Images/image-142.png' alt='loading' />

        <div className='rightpopup'>
          <p className='popup-content' style={{ color: '#773FC6', height: '130px' }}>
            {' '}
            Sit tight! We have noted down your number.
          </p>
          {/* <div className='Topbar'>
		<AiOutlineCloseSquare className='CloseFontSize' onClick={() => props.showPopup(false)} />
	  </div> */}
          <div className='popup-content'>
            <span style={{ color: '#5B5B5E', fontSize: '18px' }}>
              Our customer happiness executive will call you within 24 hrs between 10 am - 6 pm
            </span>

            <a className='pop-btn' href='/Login'>
              Take me back
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

export default CallmePop;
