import React, { useState } from 'react'
import SectionTitle from '../../Components/SectionTitle';
import { useSelector } from 'react-redux';

function Experiences() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { portfolioData }  = useSelector ((state) => state.root);
    const { experiences } = portfolioData;
    return (
        <div>
            <SectionTitle title="Experiences"/>
            <div className="flex gap-20 py-10 sm:flex-col">
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full '>
                    {experiences.map((experience, index)=>(
                        <div onClick={()=>{
                            setSelectedIndex(index)
                        }} className='cursor-pointer'>
                            <h1 className={`text-xl px-5
                            ${selectedIndex === index ? `text-tertiary border-tertiary border-l-3 -ml-[3px] cursor-pointer bg-[#1a7f5a31] py-3`
                            :`text-black cursor-pointer`}`}>
                                {experience.period}
                            </h1>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className="text-secondary text-4xl">{experiences[selectedIndex].title}</h1>
                    <h1 className="text-tertiary text-xl">{experiences[selectedIndex].company}</h1>
                    <p className="text-black">{experiences[selectedIndex].description}</p>
                </div>
            </div>
        </div>
    )
}

export default Experiences;