import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { makeRequest } from "../axios/axios"
import langs from '../../assets/languages'


export default function Create() {

    const navigate = useNavigate()
    const [gistData, setGistData] = useState({
        desc: '',
        filename: '',
        lang: 'Javascript',
        code: ''
    })

    const handleChange = e => {
        setGistData({
            ...gistData,
            [e.target.name]: e.target.value
        })
    }

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    const createGist = async () => {
        setLoading(true)
        try {
            await makeRequest.post('/gist/create', gistData)
            return navigate('/')
        } catch (error) {
            setError(error.response.data.message)
            setLoading(false)
        }
    }



    return (
        <div className="h-[calc(100vh-3.5rem)] flex flex-col gap-2 p-2 overflow-auto scrollbar-hide">

            <input className="h-8 border border-zinc-700 more-dark-blue text-white text-sm p-2 outline-none rounded-md"
                placeholder="Gist description"
                onChange={handleChange}
                name="desc"
                autoComplete="off"
            />

            <input className="h-8 w-full border border-zinc-700 less-dark-blue text-white text-sm p-2 outline-none rounded-md"
                placeholder="Filename including extension"
                onChange={handleChange}
                name="filename"
                autoComplete="off"
            />


            <select className="h-10 w-full  border border-zinc-700 less-dark-blue text-white text-sm outline-none rounded-md"
                placeholder="Language"
                name="lang"
                autoComplete="off"
                onChange={handleChange}
            >
                {
                    langs.map((lang) => {
                        return <option key={lang} value={lang}>{lang}</option>
                    })
                }
            </select>

            <textarea
                className="less-dark-blue border border-zinc-700 rounded-md outline-none text-white p-2 scrollbar-hide text-sm h-full resize-none"
                placeholder='Paste your code here.'
                onChange={handleChange}
                name="code"
            />

            <button
                onClick={createGist}
                className="w-fit p-[0.4rem] px-4 text-[0.8rem] text-white rounded-md bg-blue-500 disabled:bg-zinc-500"
                disabled={loading}>
                Create gist
            </button>


            {error ?
                <p className="text-red-500 text-sm">
                    {error}
                </p>
                :
                ''
            }


        </div>
    )
}
