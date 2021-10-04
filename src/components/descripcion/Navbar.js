import React from 'react'
import { Button, Layout } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { borrarState } from '../../actions/ui';


const { Header } = Layout;

export const NavBar = () => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const handleClick = ()=>{
        dispatch(borrarState());
        history.replace('/');

    }

    return (
        <Header style={{background:'white'}}>
            <Button onClick={handleClick} className='boton-regresar' type="primary" icon={ <ArrowLeftOutlined /> } size={'large'}>
                Regresar
            </Button>
        </Header>
    )
}
