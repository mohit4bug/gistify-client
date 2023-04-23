import { useEffect, useState } from "react"
import Gist from "../components/Gist"
import { Link } from 'react-router-dom'
import { makeRequest } from "../axios/axios"

export default function Home() {

    const [gists, setGists] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchGists = async () => {
            try {
                const res = await makeRequest.get('/gist/fetch-all')
                setGists(res.data.gists)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchGists()
    }, [])


    return (
        <div className="h-[calc(100vh-3.5rem)] w-full  overflow-auto scrollbar-hide">
            <div className="p-2 flex flex-col gap-2">

                {loading ? <p className="text-white">Loading...</p> : gists.length < 1 ? <p className="text-white">No gists yet!{' '}
                    <Link to='/new' className="text-blue-400 outline-none hover:underline">Create one</Link>
                </p>
                    : gists.map((gist) => (
                        <Gist key={gist._id} gist={gist} />
                    ))
                }
            </div>

        </div>
    )
}
