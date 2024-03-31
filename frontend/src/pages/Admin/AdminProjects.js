import React, { useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux';
import {Form, Modal, message} from 'antd';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';

function AdminProjects() {
    const dispatch = useDispatch();
    const {portfolioData} = useSelector((state) => state.root);
    const {projects} = portfolioData;
    const [type , setType] = useState("add");
    const [showAddEditModal,setShowAddEditModal] = useState(false);
    const [selectItemForEdit, setSelectItemForEdit] = useState(null);

    const onFinish = async(values)=>{
        try {
            const tech = values.technologies.split(",");
            values.technologies = tech;
            dispatch(ShowLoading());
            let response;
            if(selectItemForEdit){
                 response = await axios.post('/api/portfolio/update-project',{ ...values , _id : selectItemForEdit._id ,});
                 setSelectItemForEdit(null);
            }else{
            response = await axios.post('/api/portfolio/add-project',values)
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
            const response = await axios.post('/api/portfolio/delete-project', {_id:item._id});
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
                Add Project
            </button>
        </div>
        <div className='grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1'>
            {projects.map((project)=>(
                <div className='shadow border border-gray-400 p-5 gap-5 flex flex-col'>
                    <h1 className='text-primary text-xl font-bold'>{project.title}</h1> <hr/>
                    <img src={project.image} alt='' className='h-60 w-[80]' />
                    <h1>{project.title}</h1>
                    <h1>{project.caption}</h1>
                    <h1> {project.description}</h1>
                    <div className="flex justify-end gap-5">
                        <button className='bg-red-500 text-white px-5 py-2 ' onClick={()=>{onDelete(project)}} >Delete</button>
                        <button className='bg-primary text-white px-5 py-2 ' onClick={()=>{
                            setSelectItemForEdit(project);
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
            }} title= {selectItemForEdit ? "Edit Project" : "Add New Project" } >
                <Form layout='vertical' onFinish={onFinish} initialValues={{...selectItemForEdit,
                 technologies: selectItemForEdit?.technologies.join(" , "),
                }} >
                    <Form.Item name='title' label='Title'>
                        <input placeholder='Title'/>
                    </Form.Item>
                    <Form.Item name='image' label='Image URL'>
                        <input placeholder='Image URL'/>
                    </Form.Item>
                    <Form.Item name='technologies' label='Technologies'>
                        <input placeholder='Technologies'/>
                    </Form.Item>
                    <Form.Item name='link' label='Link'>
                        <input placeholder='Link'/>
                    </Form.Item>
                    <Form.Item name='caption' label='Caption'>
                        <textarea placeholder='Caption'/>
                    </Form.Item>
                    <Form.Item name='description' label='Description'>
                        <textarea placeholder='Description'/>
                    </Form.Item>

                    <div className="flex justify-end">
                        <button className='border-primary px-5 py-2 text-primary' onClick={()=>{
                            setShowAddEditModal(false);
                            setSelectItemForEdit(null);
                        }}>Cancel</button>
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

export default AdminProjects;