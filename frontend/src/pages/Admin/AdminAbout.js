import React from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux'; 
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';
import { message } from 'antd';


function AdminAbout() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);

    const onFinish = async(values)=>{
        try {
            const tempskills = values.skills.split(",") ;
            values.skills = tempskills;
            dispatch(ShowLoading());
            const res = await axios.post('/api/portfolio/update-about',{ ...values, _id:portfolioData.about._id});
            dispatch(HideLoading());
            if(res.data.success){
                message.success(res.data.message);
            }
            else{
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };
  return (
    <div>
        <Form onFinish={onFinish} layout='vertical' initialValues={{ ...portfolioData.about, skills : portfolioData.about.skills.join(" , "), }} >
            <Form.Item name='imgURL' label="Image URL">
                <input placeholder='Image URL'/>
            </Form.Item>
            <Form.Item name='description1' label='Description 1' >
                <textarea placeholder='Description 1'/>
            </Form.Item>
            <Form.Item name='description2' label='Description 2'>
                <textarea placeholder='Description 2'/>
            </Form.Item>
            <Form.Item name='skills' label='Skills'>
                <textarea placeholder='Skills'/>
            </Form.Item>
            <div className="flex justify-end w-full">
                <button className='px-10 py-2 bg-primary text-white' type='submit'>Save</button>
            </div>
        </Form>
    </div>
  )
}

export default AdminAbout