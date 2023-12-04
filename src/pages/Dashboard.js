import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import {BsBook, BsCalendar, BsFileEarmarkText, BsFillBellFill } from 'react-icons/bs';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart, Pie,Cell
} from 'recharts';
import "../App.css"
import { useState } from 'react'
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];



const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const semesterData = [
    { semester: 'Sem1', grade: 7 },
    { semester: 'Sem2', grade: 5 },
    { semester: 'Sem3', grade: 6 },
    { semester: 'Sem4', grade: 8 },
    { semester: 'Sem5', grade: 10 },
    { semester: 'Sem6', grade: 9 },
    { semester: 'Sem7', grade: 8 },
    { semester: 'Sem8', grade: 8 },
  ];
const growthData = [
{ day: 'Day 1', growth: 10 },
{ day: 'Day 2', growth: 15 },
{ day: 'Day 3', growth: 24 },
{ day: 'Day 4', growth: 10 },
{ day: 'Day 5', growth: 40 },
{ day: 'Day 6', growth: 43 },
{ day: 'Day 7', growth: 23 },
{ day: 'Day 8', growth: 19 },
];

const assignmentData = [
{ subject: 'Math', completed: 5, total: 10 },
{ subject: 'English', completed: 3, total: 5 },
{ subject: 'Science', completed: 7, total: 8 },

];
const pieChartData = [
{ name: 'Quiz', value: 45 },
{ name: 'Submission', value: 45 },
{ name: 'Research', value: 10 },
];



  return (
    <div className='main-container grid-container'>
    <div className='sidebar'>  <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/></div>
    <div className='right-side' >
           <div className='header'> <Header OpenSidebar={OpenSidebar}/></div>
           <div className='content gap-4'>
          
      <div className='main-title text-[#c64848] font-bold text-6xl m-auto '>
        <h3 className=' home-heading ml-10'>Hello Dear,welcome back</h3> 
      </div>
      <div className='main-title font-semibold text-[#272c69] text-4xl ml-10'>
      <h2>Your Dashboard today</h2>
      </div>

      <div className='main-cards ml-10'>
        <div className='card '>
          <div className='card-inner flex '>
            <h3 className='assignment text-[#000] font-bold text-3xl '>ASSIGNMENTS</h3>
            <BsFileEarmarkText className='card_icon ml-5 text-2xl mt-1 text-[#4c0519]' />
          </div>
          <h1 className='assignment-text text-[#c026d3] mt-4 text-xl'>View Your Assignments</h1>
          <div className='assignment-list '>
            {assignmentData.map((assignment, index) => (
              <div key={index} className='assignment-item'>
                <span className='assignment-sub text-black font-semibold'>{assignment.subject}</span>
                <span className='assignment-num ml-2 text-[#3b82f6]'>{`${assignment.completed}/${assignment.total}`}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='card'>
          <div className='card-inner  text-[#000] font-bold text-3xl mt-10 flex'>
            <h3>CALENDAR</h3>
            <BsCalendar className='card_icon ml-3' />
           
          </div>
          <h1 className='event text-[#4d7c0f] text-xl mt-3'>Upcoming Events</h1>
          <h1></h1>
          
        </div>
        <div className='card mt-3'>
          <div className='card-inner flex '>
            <h3 className="text-[#4d7c0f] text-xl">ALERTS</h3>
            <BsFillBellFill className='card_icon text-xl text-[#000] ml-3' />
          </div>
          <h1 className='text-[#4d7c0f] text-xl mt-3'>Stay Updated</h1>
          
        </div>
        <div className='charts'>
        <div className='charts  '>
          <h2 className='semester-heading  text-[#b91c1c] font-bold text-5xl mt-10'>Semester Grade</h2>
        <ResponsiveContainer width='100%' height={300}  minWidth={500}>
          <BarChart
            data={semesterData}
            margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='semester' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='grade' fill='#8884d8' />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Growth Chart */}
      <div className='charts'>
        <h2 className='semester-heading  text-[#b91c1c] font-bold text-5xl mt-10'>Growth</h2>
          <ResponsiveContainer width='100%' height={400} minwidth={1000}>
            <LineChart data={growthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='day' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='growth' stroke='#82ca9d' />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Pie Chart */}
  <div className='chart'>
    <h2 className='text-[#b91c1c] font-bold text-5xl mt-10'>Lessons</h2>
    <ResponsiveContainer width='100%' height={300}>
      <PieChart>
        <Pie
          data={pieChartData}
          cx='50%'
          cy='50%'
          innerRadius={60}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
  </div>
      </div>

           </div>

    </div>
  </div>
  )
}

export default Dashboard
