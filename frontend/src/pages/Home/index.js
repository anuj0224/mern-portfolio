import React from 'react'
import Header from '../../Components/Header';
import Intro from './intro';
import About from './about';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import LeftSider from './LeftSider';
import { useSelector } from 'react-redux';


function Home() {
  const { portfolioData }  = useSelector((state) => state.root);
  return (
    <div className='cursor-pointer'>
      <Header/>
      {portfolioData && (
        <div className='bg-primary px-40 sm:px-8'>
        <Intro/>
        <About/>
        <Experiences/>
        <Projects/>
        <Contact/>
        <Footer/>
        <LeftSider/>
        </div>
      )}
      
    </div>
  )
}

export default Home;