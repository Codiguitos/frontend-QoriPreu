import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'
import DescriptionSection from '../organisms/Login/DescriptionSection'

const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#0d1512]">
      
        <Button
          onClick={() => navigate("/")}
          variant="secondary"
          className="absolute top-5 left-5 "
        >
          Volver atrás
        </Button>
      <div className="grid md:grid-cols-2 relative z-[1] w-full max-w-[1000px] 
        bg-[#0d1512] rounded-[24px] overflow-hidden 
        shadow-[0_20px_60px_rgba(0,0,0,0.5)] 
        border border-[rgba(0,107,75,0.2)]">

        <DescriptionSection />
        <Outlet />

      </div>
    </div>
  )
}

export default AuthLayout
