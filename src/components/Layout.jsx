import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Navigate, Outlet } from 'react-router-dom'
import { addUser } from '../redux/userSlice'
import { useDispatch } from 'react-redux'
import Navbar from './Navbar'

export default function Layout() {

    const dispatch = useDispatch()
    const user = useSelector(state => state?.user?.user)

    useEffect(() => {

        const getUser = async () => {
            try {
                const res = await axios.get(import.meta.env.VITE_REACT_BACKEND_URL + '/auth/login/success', {
                    withCredentials: true
                })
                console.log(res.data)
                dispatch(addUser(res.data.user))
            } catch (error) {
                dispatch(addUser({}))
            }
        }
        getUser()

    }, [user])


    if (user?.email) {
        return (
            <div className='dark-blue h-[calc(100vh)]'>
                <Navbar />
                <Outlet />
            </div>
        )
    }

    return <Navigate to='/login' />
}
