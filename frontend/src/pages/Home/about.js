import React from 'react'
import SectionTitle from '../../Components/SectionTitle'
import { useSelector } from 'react-redux';
import './about.css'

function About() {
    const { portfolioData }  = useSelector((state) => state.root);
    const { about } = portfolioData;
    const { skills ,imgURL, description1,description2 } = about;
    return (
        <div>
        <SectionTitle title="About"/>
        <div className='flex w-full items-center sm:flex-col'>
                <div className='h-[70vh] w-1/2 sm:w-full'>
                <lottie-player src={imgURL}
                background="##fff" speed="1" 
                autoplay direction="1"
                mode="normal">
                </lottie-player>
                </div>
                <div className='flex flex-col gap-5 w-1/2'>
                    <p className='text-black'>
                        {description1}
                    </p>
                    <p className='text-black'>
                        {description2}
                    </p>
                </div>
        </div>
        <div className='py-5'>
            <h1 className='text-tertiary text-xl '>Here are Some of technologies I'm working with</h1>
            <div className='flex flex-wrap gap-10 mt-5'>
                {skills.map((skill,index)=>(
                    <div className='border border-tertiary py-3 px-5 skill'>
                        <h1 className='text-tertiary cursor-pointer'>
                            {skill}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default About;