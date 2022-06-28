import { useState } from 'react';
import logo from './checklist.png';
import './App.css';
import 'antd/dist/antd.css';
import MyButton from './Components/MyButton';
import { PlusCircleOutlined } from '@ant-design/icons';
import ListModal from './Components/ListModal';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur ma todo list
        </p>
        <MyButton 
          tooltip="Cliquer pour ajouter une liste"
          onClick={() => setIsModalVisible(true)}
          icon={<PlusCircleOutlined />}
          type = 'primary'>
            Nouvelle liste
          </MyButton>
          {/*<MyButton 
            tooltip="Cliquer pour supprimer une liste"
            onClick={() => console.log("liste supprimée")}
            icon={<MinusCircleOutlined />}
            type='danger'>
              Supprimer liste
          </MyButton>*/}
          <ListModal 
            title="nouvelle liste" 
            isVisible={isModalVisible} 
            handleCancel={()=>setIsModalVisible(false)} 
          />
      </header>
      <img src="" alt="" />
    </div>
  );
}

export default App;
