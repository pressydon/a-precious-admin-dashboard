import React, { useContext } from 'react';
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Navbar = () => {

  const {darkMode, dispatch} = useContext(DarkModeContext)
  return (
    <div className='navbar'>

      <div className="wrapper">
        <div className="search">
          <input
          type='text'
          placeholder='Search...'
          />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon  className='icon'/>
            English
          </div>

          <div className="item">
            {darkMode ? <WbSunnyIcon className='icon' onClick={()=>dispatch({type: 'TOGGLE'})} /> :  <DarkModeOutlinedIcon className='icon' onClick={()=>dispatch({type: 'TOGGLE'})} />}
           
          </div>

          <div className="item">
            <FullscreenExitOutlinedIcon className='icon'/>
          </div>

          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className="counter">2</div>
          </div>

          <div className="item">
            <FormatListBulletedOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <img src='https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg'
            alt='user-profile'
            className='avatar'
             />
            
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Navbar
