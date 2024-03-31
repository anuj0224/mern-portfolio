import React from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux'; 
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';
import { message } from 'antd';


function AdminIntro() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);

    const onFinish = async(values)=>{
        try {
            dispatch(ShowLoading());
            const res = await axios.post('/api/portfolio/update-intro',{ ...values,_id:portfolioData.intro._id});
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
        <Form onFinish={onFinish} layout='vertical' initialValues={ portfolioData.intro } >
            <Form.Item name='welcomeText' label="WelcomeText">
                <input placeholder='Welcome Text'/>
            </Form.Item>
            <Form.Item name='firstName' label='FirstName' >
                <input placeholder='First Name'/>
            </Form.Item>
            <Form.Item name='lastName' label='LastName'>
                <input placeholder='Last Name'/>
            </Form.Item>
            <Form.Item name='caption' label='Caption'>
                <input placeholder='Caption'/>
            </Form.Item>
            <Form.Item name='description' label='Description '>
                <textarea placeholder='Description'/>
            </Form.Item>
            <div className="flex justify-end w-full">
                <button className='px-10 py-2 bg-primary text-white' type='submit'>Save</button>
            </div>
        </Form>
    </div>
  )
}

export default AdminIntro