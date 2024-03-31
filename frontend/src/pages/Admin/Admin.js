import React from 'react'
import Header from '../../Components/Header';
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import AdminExpe from './AdminExpe';
import AdminProjects from './AdminProjects';
import AdminContact from './AdminContact';

const { TabPane } = Tabs;
function Admin() {
    const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
        <Header/>
        <h1 className='text-2xl px-5 py-2 mb-1 text-primary text-center' >Dashboard</h1>
        {portfolioData && <div className='px-5 pb-10'>
            <Tabs defaultActiveKey='1' tabPosition='left'>
                <TabPane tab='Intro' key='1' >
                    <AdminIntro/>
                </TabPane>
                <TabPane tab='About' key='2' >
                    <AdminAbout/>
                </TabPane>
                <TabPane tab='Experiences' key='3' >
                    <AdminExpe/>
                </TabPane>
                <TabPane tab='Projects' key='4' >
                    <AdminProjects/>
                </TabPane>
                <TabPane tab='Contact' key='5' >
                    <AdminContact/>
                </TabPane>
            </Tabs>
        </div>}
    </div>
  );
};

export default Admin;