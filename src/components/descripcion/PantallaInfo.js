import React from 'react'
import { Col, Row, Space, Layout } from 'antd';
import { NavBar } from './Navbar';
import { Sider } from './Sider/Sider';
import { Contenedor } from './Contenedor/Contenedor';


export const PantallaInfo = () => {
    return (    
        <div className='root'>
            <Row style={{width:'80%'}} justify='center' align='center' xs={24}>
                <Space direction='vertical' size='large' style={{width:'100%', minHeight:'90%'}}>
                    <Col 
                    className='container container-info' 
                    xs={24}
                    sm={24}  
                    style={{minHeight:'90%'}}
                    >   <NavBar />
                        <Layout style={{background:'white'}}>
                            <Sider/>
                            <Contenedor/>
                        </Layout>
                    </Col>
                </Space>
            </Row>
        </div>
    )
}
