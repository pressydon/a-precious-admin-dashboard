import React from 'react';
import Datatable from '../../components/datatable/Datatable';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './List.scss';

const List = ({addSomething}) => {
  return (
    <div className='list'>
      <Sidebar />

      <div className="listContainer">
        <Navbar />
        <Datatable addSomething='Add New' />
      </div>
    </div>
  )
}

export default List
