
import {Routes,Route} from 'react-router-dom'
import './App.css';
import LoginPage from './components/Login';
import Userregistration from './components/Userregistration';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/tha' element={<Userregistration/>} />
        <Route path='/' element={<LoginPage/>} />
        <Route path='dashboard' element={<Dashboard/>} />
 

      </Routes>

    </div>
  );
}

export default App;
