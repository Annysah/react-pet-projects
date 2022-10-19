import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'

const Logout = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const onLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
    }
  return (
    <div>
        <h1>Welcome <span className='username'>{user.name}</span></h1>
        <button type='submit' onClick={e => onLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout