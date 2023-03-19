import {Route, Routes } from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
          </Routes>
        </div>
    </>
  );
}

export default App;
