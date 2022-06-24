import logo from './checklist.png';
import './App.css';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import MyButton from './Components/MyButton';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur ma todo list
        </p>
        <MyButton 
          tooltip="Cliquer pour ajouter une liste"
          onClick={() => console.log("liste ajoutée")}
          icon={<PlusCircleOutlined />}
          type = 'primary'>
            Nouvelle liste
          </MyButton>
          <MyButton 
          tooltip="Cliquer pour supprimer une liste"
          onClick={() => console.log("liste supprimée")}
          icon={<MinusCircleOutlined />}
          type='danger'>
            Supprimer liste
          </MyButton>
      </header>
      <img src="" alt="" />
    </div>
  );
}

export default App;
