import { DragImagen } from "./components/principal/DragImagen";
import { Titulo } from "./components/principal/Titulo";

import { Row, Space, Col } from "antd";



function App() {
  return (
      <div className='root'>
        <Row justify='center' align='center'>
          <Space direction='vertical'>
            <Col 
              className='container' 
              xs={24}sm={24} span={24}>
              <Titulo mensaje='¿Quién es ese actor?'/>  
              <DragImagen />
            </Col>
          </Space>
        </Row>
      </div>
  );
}

export default App;
