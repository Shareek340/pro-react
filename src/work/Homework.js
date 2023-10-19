import React from 'react'
import WorkPage from './WorkPage'
import MainLayout from '../components/MainLayout'
import Project1 from './Project1'
import Project2 from './project2'
import Project3 from './project3'
import WorkD from './WorkD'

function Homework() {
  return (
    <div className='wome-work'>
        <WorkPage/>
        <Project1/>
        <Project2/>
        <Project3/>
        <WorkD/>
        

        <MainLayout/>
    </div>
  )
}

export default Homework