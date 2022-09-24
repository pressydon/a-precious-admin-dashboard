import React from 'react';
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCardIcon from '@mui/icons-material/AddCard';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PortraitIcon from '@mui/icons-material/Portrait';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import { Link,NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';




const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext);

  const activeStyle ={
    backgroundColor: '#7451f8',
    color: 'white',
}

  return (
    <div className='sidebar'>

      <div className='top'> 
      <Link to='/' style={{textDecoration: 'none'}}>
      <span className="logo">PreciousAdmin</span>
      </Link>
   
      </div>
        <hr/>
      <div className='center'>
        <ul>
            <p className='title'>Main</p>

            <li>
                <DashboardIcon className='icon' />
                <span> Dashboard</span>
            </li>


            <p className='title'>LISTS</p>
            
            <NavLink className={({isActive})=> isActive ? activeStyle : undefined } to='/users' style={{textDecoration: 'none'}}>
            <li>
                <PersonOutlineIcon className='icon'/>
               <span> Users </span>
            </li>
            </NavLink>
            <Link to='/products' style={{textDecoration: 'none'}}>
            <li>
                <AccountBalanceIcon className='icon' />
              <span>Products</span>   
            </li>
            </Link>
            <li>
                <AddCardIcon className='icon'/>
               <span> Orders</span>
            </li>
            <li>
                <LocalShippingIcon className='icon'/>
                <span>Delivery</span>
            </li>

            <p className='title'>USEFUL LINKS</p>
            <li>
                <QueryStatsIcon className='icon'/>
                <span>Stats</span>
            </li>
            <li>
                <CircleNotificationsIcon className='icon'/>
                <span>Notifications</span>
            </li>

            <p className='title'>SERVICE</p>
            <li>
                <MonitorHeartIcon className='icon'/>
               <span> System Health</span>
            </li>
            <li>
                <PsychologyIcon className='icon'/>
               <span> Logs</span>
            </li>
            <li>
                <SettingsIcon className='icon'/>
               <span> Settings</span>
            </li>

            <p className='title'>USER</p>
            <li>
                <PortraitIcon className='icon'/>
                <span>Profile</span>
            </li>
            <li>
                <LogoutIcon className='icon'/>
                <span>Logout</span>
            </li>
        </ul>
      </div>

      <div className='bottom'>
        <div className="colorOption" onClick={()=>dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type: "DARK"})}></div>
       
      </div>

    </div>
  )
}

export default Sidebar
