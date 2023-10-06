import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser';
import { SET_LOGIN, SET_NAME, SET_USER } from '../../features/authSlice';
import { toast } from 'react-toastify';
import { getUser } from '../../services/authServices';
import './header.css';
// import ProfileSide from '../../components/Profile/ProfileSide';
// import PostSide from '../../components/PostSide/PostSide';
// import RightSide from '../../components/RightSide/RightSide';
import { selectUser } from '../../features/authSlice';
import { AiFillHome } from 'react-icons/ai';
import { CgCommunity } from 'react-icons/cg';
import { MdOutlineExplore, MdOutlineGroups, MdOutlineAddCircleOutline, MdOutlineSavedSearch } from 'react-icons/md';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import UserMobileMenu from './UserMobileMenu';
import { logoutUser } from '../../services/authServices';
import { useNavigation } from 'react-router-dom';

const UserHeader = () => {
  useRedirectLoggedOutUser('/login');
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate('/login');
  };

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    console.log('Getting use');

    async function getUserData() {
      const data = await getUser();
      console.log(data);

      setProfile(data);

      dispatch(SET_USER(data));
      dispatch(SET_NAME(data.name));
    }
    getUserData();
  }, [dispatch]);
  //   const [searchData, setSearchData] = useState("")
  return (
    <>
      <UserMobileMenu id='menu_mobile' />
      <header className='user_page_navbar container-fluid'>
        <div className='inner_header'>
          <div className='logo'>
            <img src='images/logo.png' alt='iamge' />
          </div>
          {/* <div className='search_input col-6'>
          <input className='search_input_box input' placeholder='Search Anything' value={searchData} onChange={(event) => {
            setSearchData(event.target.value);
            console.log(searchData)
          }} />
        </div> */}

          <div className='menue_icons'>
            <ul className='inner_menu_icons'>
              <li className='active'>
                <span>
                  <AiFillHome />
                </span>
                <p>Me</p>
              </li>
              <li>
                <span>
                  <CgCommunity />
                </span>
                <p>Community</p>
              </li>
              <li>
                <span>
                  <MdOutlineAddCircleOutline />
                </span>
                <p>Post</p>
              </li>
              <li>
                <span>
                  <MdOutlineExplore />
                </span>
                <p>Explore</p>
              </li>
              <li>
                <span>
                  <MdOutlineGroups />
                </span>
                <p>Groups</p>
              </li>
            </ul>
          </div>
          <div className='profile_section'>
            <ul className='right_menu_icons'>
              <li>
                <MdOutlineSavedSearch />
              </li>
              <li>
                <BsFillChatLeftTextFill />
              </li>
              <li>
                <MdOutlineExplore />
              </li>
              <li className='profile'>
                <img src={profile?.photo} alt='profilepic' onClick={toggleDropdown} />
              </li>
            </ul>
          </div>
          {isOpen && (
            <div className='dropdown-menu'>
              <li className='dropdownItem'>
                <i className='fa-solid fa-user'></i>
                <a href='/EditProfile'>Profile</a>
              </li>
              <hr />
              <li className='dropdownItem'>
                <i className='fa-sharp fa-solid fa-lock'></i>
                <a href='./Forgot'>Forgot</a>
              </li>
              <hr />
              <li className='dropdownItem'>
                <i className='fa-solid fa-window-restore'></i>
                <a href='./Reset'>Reset</a>
              </li>
              <hr />
              <li className='dropdownItem'>
                <i className='fa-solid fa-arrow-right-from-bracket'></i>
                <a onClick={logout} href='/'>
                  Logout
                </a>
              </li>
              <hr />
            </div>
          )}
        </div>
      </header>
      <div className='Home'>
        {/* <ProfileSide className='col-lg-3 col-12' /> */}
        {/* <PostSide /> */}
        {/* <RightSide /> */}
        {/* <Leftside /> */}
        {/* <Usermain /> */}
        {/* <RightSide /> */}
      </div>
    </>
  );
};
export default UserHeader;
