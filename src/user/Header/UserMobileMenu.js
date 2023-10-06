import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { CgCommunity } from 'react-icons/cg';
import { MdOutlineExplore, MdOutlineGroups, MdOutlineAddCircleOutline } from 'react-icons/md';

const UserMobileMenu = () => {
  return (
    <div className='mobile_menu'>
      <ul className='inner_menu_icons mobile_inner_menu'>
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
  );
};

export default UserMobileMenu;
