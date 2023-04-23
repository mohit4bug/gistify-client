import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const navigate = useNavigate()
    const loginGoogle = () => {
        window.open(import.meta.env.VITE_REACT_BACKEND_URL + '/auth/google', '_self')
    }

    const user = useSelector(state => state?.user?.user)
    console.log(user)
    useEffect(() => {
        if (user.email) {
            navigate('/')
        }
    }, [user])


    return (
        <div className="h-screen w-full dark-blue flex 
        items-center justify-center flex-col gap-[0.5rem]">
            <p className="text-white text-sm">Save your code for free!</p>
            <button className="p-2 px-4 green text-white rounded-md"
                onClick={loginGoogle}>
                Login with Google
            </button>
        </div>
    )
}
