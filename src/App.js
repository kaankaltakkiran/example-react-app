
import './App.css';
//pages
import Home from './pages/Home';
import Users from './pages/Users'
import Contact from './pages/Contact';
import Menu from './components/Menu';
import UserDetail from './pages/UserDetail';
import Login from './pages/Login';
import DashboardLayout from "./layouts/DashboardLayout"
import NotFoundPage from './components/NotFoundPage';
import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
    <Route path='/'element={<DashboardLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='users' element={<Users/>}/>
          <Route path='users/:id' element={<UserDetail/>}/>
          <Route path='contact' element={<Contact/>}/>
          </Route>
          <Route path='login' element={<Login/>}/>

          <Route path='*' element={<NotFoundPage/>}/>

          </Routes> 
    </BrowserRouter>
  );
}

export default App;
