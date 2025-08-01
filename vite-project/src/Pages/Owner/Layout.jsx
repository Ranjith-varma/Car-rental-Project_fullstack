import React, { useEffect } from 'react'
import NavbarOwner from '../../Components/owner/NavbarOwner'
import Sidebar from '../../Components/owner/Sidebar'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {

  const {isOwner,navigate} = useAppContext();

  useEffect(()=>{
    if(!isOwner){
      navigate('/')
    }
  })

  return (
    <div className='flex flex-col'>
        <NavbarOwner />
        <div className='flex '>
            <Sidebar />
            <Outlet />
        </div>
      
    </div>
  )
}

export default Layout
