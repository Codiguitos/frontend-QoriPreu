import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../molecules/dashboard/Nav'
const DashboardLayout = () => {
  return (
    <div className='| min-h-screen bg-linear-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d] flex  '>
        <div className='hidden sm:block border-r-1 border-gray-800'>
          <div className="p-6 bg-gradient-to-r from-[#006B4B] to-[#00A676]">
            <h1 className="text-2xl font-bold text-white">Qori<span className="text-[#FFB800]">Preu</span></h1>
            <p className="text-sm text-white/80 mt-1">Academia Cusco</p>
          </div>
          <Nav/>
        </div>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout