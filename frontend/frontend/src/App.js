import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navigation/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import CreateUser from './pages/CreateUser/CreateUser';
import UpdateUser from './pages/UpdateUser/UpdateUser';
import Features from './pages/Features/Features';

function App() {
  return (
    <div>
      <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element= {<CreateUser/>}/>
      <Route path='/update/:id' element= {<UpdateUser/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/features' element={<Features/>}/>
    </Routes>
    </div>
  );
}

export default App;
