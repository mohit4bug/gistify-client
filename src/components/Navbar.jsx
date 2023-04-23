import { Link } from 'react-router-dom'
import { IoAddOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { FiLogOut } from 'react-icons/fi'
import { makeRequest } from '../axios/axios'
import { removeUser } from '../redux/userSlice'

export default function Navbar() {

    const dispatch = useDispatch()

    const user = useSelector(state => state.user.user)
    const logoutUser = async () => {
        try {
            await makeRequest.get('/auth/logout')
            dispatch(removeUser())
        } catch (error) {
            dispatch(removeUser())
        }
    }

    return (
        <div className="h-14 less-dark-blue w-full flex items-center 
        px-4 text-white justify-between sticky top-0">
            <Link to='/' className="text-xl font-semibold">Gistify</Link>
            <div className='flex items-center gap-2'>
                <Link to='/new'>
                    <IoAddOutline size={20} />
                </Link>
                <img src={user.avatar} alt='profile' className='h-6 w-6 rounded-full' />
                <Link to='/login' onClick={logoutUser}>
                    <FiLogOut size={18} />
                </Link>
            </div>
        </div>
    )
}
