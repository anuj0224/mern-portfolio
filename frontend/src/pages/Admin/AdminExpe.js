import React, { useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux';
import {Form, Modal, message} from 'antd';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';

function AdminExpe() {
    const dispatch = useDispatch();
    const {portfolioData} = useSelector((state) => state.root);
    const {experiences} = portfolioData;
    const [type , setType] = useState("add");
    const [showAddEditModal,setShowAddEditModal] = useState(false);
    const [selectItemForEdit, setSelectItemForEdit] = useState(null);

    const onFinish = async(values)=>{
        try {
            dispatch(ShowLoading());
            let response;
            if(selectItemForEdit){
                 response = await axios.post('/api/portfolio/update-experience',{ ...values , _id : selectItemForEdit._id ,});
                 setSelectItemForEdit(null);
            }else{
            response = await axios.post('/api/portfolio/add-experience',values)
            };
            dispatch(HideLoading());
            if(response.data.success){
                message.success(response.data.message);
                setShowAddEditModal(false);
                setSelectItemForEdit(null);
                dispatch(HideLoading(true));
                dispatch(ReloadData(true));
            }
            else{
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    const onDelete = async(item)=>{
        try {
            dispatch(ShowLoading());
            const response = await axios.post('/api/portfolio/delete-experience', {_id:item._id});
            dispatch(HideLoading());
            if(response.data.success){
                message.success(response.data.message);
                setShowAddEditModal(false);
                setSelectItemForEdit(null);
                dispatch(HideLoading(true));
                dispatch(ReloadData(true));
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

  return (
    <div>
        <div className="flex justify-end">
            <button className="bg-primary px-5 py-2 text-white" onClick={()=>{
                setSelectItemForEdit(null);
                setShowAddEditModal(true);
            }}>
                Add Experience
            </button>
        </div>
        <div className='grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1'>
            {experiences.map((experience)=>(
                <div className='shadow border border-gray-400 p-5 flex flex-col'>
                    <h1 className='text-primary text-xl font-bold'>{experience.period}</h1> <hr/>
                    <h1>Company : {experience.company}</h1>
                    <h1>Role : {experience.title}</h1>
                    <h1> {experience.description}</h1>
                    <div className="flex justify-end gap-5">
                        <button className='bg-red-500 text-white px-5 py-2 ' onClick={()=>{onDelete(experience)}} >Delete</button>
                        <button className='bg-primary text-white px-5 py-2 ' onClick={()=>{
                            setSelectItemForEdit(experience);
                            setShowAddEditModal(true);
                            setType("edit");
                        }}>Edit</button>
                    </div>
                </div>
            ))}
        </div>
        
        {(type ==='add' || selectItemForEdit) && (
            <Modal open={showAddEditModal} footer={null} onCancel={()=>{
                setShowAddEditModal(false);
                setSelectItemForEdit(null);
            }} title= {selectItemForEdit ? "Edit Experience" : "Add New Experience" } >
                <Form layout='vertical' onFinish={onFinish} initialValues={selectItemForEdit} >
                    <Form.Item name='period' label='Period'>
                        <input placeholder='Period'/>
                    </Form.Item>
                    <Form.Item name='company' label='Company'>
                        <input placeholder='company'/>
                    </Form.Item>
                    <Form.Item name='title' label='Role'>
                        <input placeholder='Role'/>
                    </Form.Item>
                    <Form.Item name='description' label='Description'>
                        <textarea placeholder='Description'/>
                    </Form.Item>
                    <div className="flex justify-end">
                    <button className='border-primary px-5 py-2 text-primary' onClick={()=>{
                        setShowAddEditModal(false);
                        setSelectItemForEdit(null);
                    }} >Cancel</button>
                    <button className='bg-primary px-5 py-2 text-white' type='submit'>
                        {selectItemForEdit ? "Update" : "Add"}
                    </button>
    
                </div>
                </Form>
            </Modal>
        )}
    </div>
  )
}

export default AdminExpe;