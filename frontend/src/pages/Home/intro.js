import React from 'react'
import { useSelector } from 'react-redux';
import './intro.css';
import resume from './resume.pdf';
  
function Intro() {
  const { portfolioData }  = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName , description, caption, welcomeText } = intro;
  return (
    <div className='h-[80vh] bg-primary  flex py-10 flex-col items-start gap-6 justify-center sm:gap-6 '>
      <h1 className='text-black'>{welcomeText || ''}</h1>
      <h1 className='text-8xl sm:text-4xl text-secondary font-semibold'>{firstName || ''} { lastName || ''}</h1>
      <h1 className='text-7xl sm:text-4xl  text-black font-semibold'>
       {caption || ''}</h1>
      <p className='text-black w-2/3'>
       {description || ''}
      </p>
      <a href={resume} download>
      <button className='border-2 border-tertiary
       text-tertiary px-10 py-3 rounded cursor-pointer'>
        Download CV
        </button>
        </a>
    </div>
  )
}

export default Intro;