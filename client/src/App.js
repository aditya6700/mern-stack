import React, { useContext, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Logout from './pages/Logout';
import Error from './pages/Error';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { initialState, reducer } from './reducer/UseReducer';


export const userContext = React.createContext();

export default function App() {
  // const userContext = useContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <userContext.Provider value={{state, dispatch}}>
        <Routes>
          <Route path='/'         element={<Home     />} />
          <Route path='/about'    element={<About    />} />
          <Route path='/login'    element={<Login    />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact'  element={<Contact  />} />
          <Route path='/logout'   element={<Logout   />} />
          <Route path='*'         element={<Error    />} />
        </Routes>
      </userContext.Provider>
    </BrowserRouter>
  )
} 
