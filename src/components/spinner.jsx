import React, { Component } from 'react'

const Spinner = ()=>{
  return (
       
    <div className="fixed inset-0  flex justify-center items-center bg-white/50 ">
        <div className="relative flex items-center justify-center">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-500"></div>
          <div className="absolute flex items-center justify-center bg-white/20 backdrop-blur-md text-sm text-blue-900 font-semibold px-4 py-2 rounded-full border border-white/30 shadow-lg">
            Loading...
          </div>
        </div>
      </div>
      
    )
  }

  export default Spinner
