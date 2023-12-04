import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import AssignmentList from '../components/AssignmentList';
import "../App.css";

const Assignment = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('all');

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='main-container'>
      <div className='sidebar'>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      </div>
      <div className='right-side'>
        <div className='header'>
          <Header OpenSidebar={OpenSidebar} />
        </div>
        <div className='content'>
          <div className='topic-selector m-auto text-3xl'>
            <label className='select-heading mr-4 text-[#36872d] font-bold'>Select Topic:</label>
            <select className='option-search rounded-xl border-solid border-2 border-indigo-600'
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
            >
              <option value='all'>All</option>
              <option value='machine-learning'>Machine Learning</option>
              <option value='javascript'>JavaScript</option>
              <option value='python'>Python</option>
            </select>
          </div>
          <AssignmentList selectedTopic={selectedTopic} />
        </div>
      </div>
    </div>




  );
};

export default Assignment;
