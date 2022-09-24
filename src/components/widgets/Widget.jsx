import React from 'react';
import './Widget.scss';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


const Widget = ({type}) => {

    let data;

    //temporary

    const amount = 1280;
    const diff = 20;

    switch(type){
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'see all users',
                icon:     <PersonOutlineIcon  className='icon' style={{color: 'red', backgroundColor:'rgba(255, 0, 0, 0.368)'}}/>,        
            };
            break;
            case 'order':
                data = {
                    title: 'ORDERS',
                    isMoney: false,
                    link: 'view all orders',
                    icon:     <ShoppingCartOutlinedIcon className='icon' style={{color: 'orange', backgroundColor:'rgba(255, 166, 0, 0.443)'}}/>,        
                };
                break;
                case 'earnings':  
                    data = {
                        title: 'EARNINGS',
                        isMoney: true,
                        link: 'view net earnings',
                        icon:     <MonetizationOnOutlinedIcon  className='icon' style={{color: 'purple', backgroundColor:'rgba(128, 0, 128, 0.444)'}}/>,        
                    };
                    break;
                    case 'balance':
                        data = {
                            title: 'BALANCE',
                            isMoney: true,
                            link: 'see details',
                            icon:     <AccountBalanceWalletOutlinedIcon  className='icon' style={{color: 'blue', backgroundColor:'rgba(0, 0, 255, 0.413)'}}/>,        
                        };
                     break;
            default:
              break;
    }
  return (
    <div className='widget'>
     <div className="left">
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && '$'}{amount}</span>
        <span className='link'>{data.link}</span>
     </div>
     <div className="right">
        <div className="percentage positive">
            <ArrowUpwardOutlinedIcon />
            {diff}%
        </div>
        {data.icon}
     </div>
    </div>
  )
}

export default Widget
