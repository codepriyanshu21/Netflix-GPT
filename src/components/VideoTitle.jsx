import React from 'react'
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute  '>
        <div className='bg-gradient-to-r from-black w-screen aspect-video h-[100%] pt-[20%] px-6 md:px-24 text-white '>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <h1 className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</h1>
        <div className='flex gap-2 my-2 md:my-0'>
            <button className='bg-white text-black py-1 md:py-4 px-3 md:px-12 text-lg  rounded-lg flex items-center font-semibold gap-5 hover:bg-opacity-70'><FaPlay className='text-black'/>Play</button>
            <button className='hidden  bg-white text-black py-4 px-12 text-lg  rounded-lg  items-center font-semibold gap-5 hover:bg-opacity-70 md:flex'><CiCircleInfo className='font-bold'/>More Info</button>
        </div>
        </div>
    </div>
  )
}

export default VideoTitle;