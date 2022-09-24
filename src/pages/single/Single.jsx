import React from 'react';
import './Single.scss'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';
import { Link } from 'react-router-dom';

const Single = ({aspect, title}) => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton"> 
            <Link to='/users/new'  style={{textDecoration: 'none'}}>
            Edit 
              </Link>
           
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img 
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
               alt="avatar" 
               className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">janedoe@preciousmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+2348067919787</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">18 gana street maitama</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">Nigeria</span>
                  </div>
                </div>
            </div>
          </div>
          <div className="right">
            <Chart  aspect={3.5/1} title="User Spending last 6 months"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
     
    </div>
  )
}

export default Single
