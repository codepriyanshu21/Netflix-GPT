import React from 'react'
import GptSearchBar from './GptSearchBar.jsx'
import GptMovieSuggestions from './GptMovieSuggestions.jsx'
import { BG_URL } from '../utils/constants.jsx'

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img src={BG_URL} alt='logo' className='h-screen w-screen object-cover'>

        </img>
      </div>
      <div className='pt-[50%] md:p-0'>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>

    </>
  )
}

export default GptSearch