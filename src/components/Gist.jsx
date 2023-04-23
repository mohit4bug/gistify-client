import { useSelector } from 'react-redux'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import moment from "moment"

export default function Gist({ gist }) {

    const user = useSelector(state => state.user.user)
    return (
        <div className="h-auto p-2 flex flex-col gap-2">

            <div className="flex flex-col gap-2">
                <div className='flex text-sm items-center gap-[0.2rem]'>
                    <img src={user.avatar} alt='profile' className='h-6 w-6 rounded-full' />
                    <p className='text-blue-400'>{user?.email.split('@')[0]}</p>
                    <p className='text-white'>/</p>
                    <p className='text-blue-400 font-semibold cursor-pointer hover:underline'>index.js</p>
                </div>
                <p className='text-[0.8rem] text-zinc-400 first-letter:uppercase'>{moment(gist.createdAt).fromNow()}</p>
                <p className='text-[0.8rem] text-zinc-400'>
                    {gist.desc}
                </p>
            </div>


            <div className='border border-zinc-700 rounded-md text-sm text-white'>
                <SyntaxHighlighter language={gist.lang.toLowerCase()} style={coldarkDark} customStyle={{ backgroundColor: 'transparent' }}>
                    {gist.code}
                </SyntaxHighlighter>
            </div>

        </div>
    )
}
