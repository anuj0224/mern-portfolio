import React from 'react'
import SectionTitle from '../../Components/SectionTitle';
import { useSelector } from 'react-redux';

function Contact() {
    const { portfolioData }  = useSelector((state) => state.root);
    const { contact } = portfolioData;
    // const { name, age, email, mobile, gender,country } = contact;
    return (
        <div>
            <SectionTitle title="Say Hello" />
            <div className="flex sm:flex-col items-center justify-between">
                <div className="flex flex-col gap-1 text-sm">
                    <h1 className='text-tertiary'>{'{'}</h1>
                    {Object.keys(contact).map((key)=>(
                        key !== '_id' &&
                        <h1 className='ml-5'>
                            <span className='text-tertiary'>{key} : </span>
                            <span className='text-tertiary'>{contact[key]}</span>
                        </h1>
                    ))}
                    <h1 className='text-tertiary'>{'}'}</h1>
                </div>
                <div className='h-[400px]'>
                <lottie-player src="https://lottie.host/7a210f4a-50da-4730-9f0b-e03357b09841/uDzNMPoSSD.json" 
                background="##FFFFFF" 
                speed="1"
                autoplay direction="1"
                mode="normal"></lottie-player>
                </div>
            </div>
        </div>
    )
}

export default Contact;