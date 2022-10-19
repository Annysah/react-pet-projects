import React from 'react'
import Login from './components/Login'

import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Logout from './components/Logout';

const App = () => {
  const user = useSelector(selectUser)
  return (
    <>
      {user ? <Logout /> : <Login />}
    </>
  )
}

export default App