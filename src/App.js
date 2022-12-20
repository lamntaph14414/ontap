// import logo from './logo.svg';
import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Layout from './components/layouts/Layout';
function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='layout' element={<Layout/>}/>
        <Route path='about' element={<About />}/>
        <Route path='user/add' element={<AddUser/>}/>
        <Route path='user/edit/:id' element={<EditUser/>}/>
        <Route path='user/:id' element={<User/>}/>


        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>

  );
}

export default App;
