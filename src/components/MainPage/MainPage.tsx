import React from 'react'
import MainPageBar from './MainPageBar'
import SideBar from '../Sidebar/SideBar'
import MainTable from './MainTable'

const MainPage = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center relative'>
        <div className='hidden md:flex md:w-full md:px-4 xl:px-4 pr-[62px]'>
        <SideBar />
        </div>
        <div className='mt-[26px] mb-auto md:px-4 xl:px-4 pr-[62px]'>
            <MainPageBar />
        </div>
        <MainTable />
    </div>
  )
}

export default MainPage