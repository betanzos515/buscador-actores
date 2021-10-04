import { useEffect } from 'react';
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { buscarActor } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


const { Dragger } = Upload;

export const DragImagen = () => {
    
    const dispatch = useDispatch();
    const { actor, error } = useSelector(state => state.actor);
    const history = useHistory();
    
    useEffect(() => {
        if(actor !== ''){
            history.replace('/descripcion');
        }
    // eslint-disable-next-line
    }, [actor])

    const handleRequest =  e =>{
        dispatch(buscarActor(e.file));
    }

    const props = {
        name: 'file',
        multiple: false,
        showUploadList: false,
        customRequest:handleRequest,
    };

    return (
            <>
                { error ? <p className='error'>Hubo un error, intenta con otra imagen</p> : null}
                <Dragger {...props}  className='dragger'
                accept='.png, .jpg, .JPG, .PNG'
                >
                    <p className="ant-upload-drag-icon">
                    <InboxOutlined style={{fontSize:'4rem'}}/>
                    </p>
                    <p className="ant-upload-text">Haga clic o arrastre el archivo a esta área para cargarlo
                    </p>
                    <p className="ant-upload-hint">
                    Los archivos soportados son : .jpg / .png
                    </p>
                </Dragger>
            </>
    )
}
