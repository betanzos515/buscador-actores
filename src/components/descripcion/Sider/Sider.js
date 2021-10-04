import React from 'react'
import { Layout } from 'antd'
import { InfoActor } from './InfoActor';

const { Sider : SiderInfo } = Layout;

export const Sider = () => {
    
    return (
        <SiderInfo width={'20%'} style={{marginTop:'30px', background:'white', marginRight:'20px'}}>
            <InfoActor/>
        </SiderInfo>
    )
}
