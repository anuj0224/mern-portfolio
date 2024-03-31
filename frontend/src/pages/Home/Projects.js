import React from 'react'
import SectionTitle from '../../Components/SectionTitle';
import { useSelector } from 'react-redux';

function Projects() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const { portfolioData }  = useSelector((state) => state.root);
    const { projects } = portfolioData;
  return (
    <div>
        <SectionTitle title="Projects"/>
        <div className="flex gap-20 py-10 sm:flex-col">
            <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                {projects.map((project, index)=>(
                    <div onClick={()=>{
                        setSelectedIndex(index)
                    }} className='cursor-pointer'>
                        <h1 className={`text-xl px-5
                        ${selectedIndex === index ? `text-tertiary border-tertiary border-l-3 -ml-[3px] cursor-pointer bg-[#1a7f5a31] py-3`
                        :`text-black cursor-pointer`}`}>
                            {project.title}
                        </h1>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center gap-10 sm:flex-col'>
                <img src={projects[selectedIndex].image} alt="" className='h-60 w-72'/>
            <div className='flex flex-col gap-5'>
                <h1 className="text-secondary text-4xl">{projects[selectedIndex].title}</h1>
                <h1 className="text-tertiary text-xl">{projects[selectedIndex].caption}</h1>
                <p className="text-black">{projects[selectedIndex].description}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Projects;