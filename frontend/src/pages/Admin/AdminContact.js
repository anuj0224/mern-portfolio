import React from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux'; 
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';
import { message } from 'antd';


function AdminContact() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);

    const onFinish = async(values)=>{
        try {
            dispatch(ShowLoading());
            const res = await axios.post('/api/portfolio/update-contact',{ ...values,_id:portfolioData.contact._id});
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
        <Form onFinish={onFinish} layout='vertical' initialValues={ portfolioData.contact } >
            <Form.Item name='name' label='Name' >
                <input placeholder='Name'/>
            </Form.Item>
            <Form.Item name='age' label='Age'>
                <input placeholder='Age'/>
            </Form.Item>
            <Form.Item name='gender' label='Gender'>
                <input placeholder='Gender'/>
            </Form.Item>
            <Form.Item name='email' label='Email'>
                <input placeholder='Email'/>
            </Form.Item>
            <Form.Item name='mobile' label='Mobile No.'>
                <input placeholder='Mobile No.'/>
            </Form.Item>
            <Form.Item name='country' label='Country'>
                <input placeholder='Country'/>
            </Form.Item>
            <div className="flex justify-end w-full">
                <button className='px-10 py-2 bg-primary text-white' type='submit'>Save</button>
            </div>
        </Form>
    </div>
  )
}

export default AdminContact;