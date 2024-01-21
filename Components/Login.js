import { useAuth } from '@/context/context'
import React, {useState} from 'react'

export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoggingIn, setLoggingIn] = useState(true)


    const {login, signUp, currentUser} = useAuth()
    console.log(currentUser)
    async function submitHandler() {
        setError(null)
        if(!email || !password){
            setError("Please enter email and password");
            return;
        }
        if(isLoggingIn){
            try{
                return await login(email, password)
            }catch(err){
                setError("Incorrect email and password")
                return
            }
        }
        else{
            try{
             await signUp(email, password)
            }catch(err){
                setError("Account already exists or Unable to register")
                
            }

        }
       

    }

    return (
        <div className='flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4'>
            <h1 className='font-extrabold text-2xl select-none sm:text-4xl'>{isLoggingIn? 'LOGIN' : 'REGISTER'}</h1>
            {error && <div className='border-solid py-1 border-red-300 text-red-300 text-xl sm"text-2xl'>{error}</div>}
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='outline-none border-b-4 border-solid border-white focus:border-green-300 text-slate-900 p-2 w-full max-w-[40ch]' placeholder='Email Address...'/>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className='outline-none border-b-4 border-solid border-white focus:border-green-300 text-slate-900 p-2 w-full max-w-[40ch]' placeholder='Password...'/>
            <button onClick={submitHandler}
            className='w-full max-w-[40ch] border border-solid border-white uppercase py-2 relative duration-300 
            after:absolute after:top-0 after:right-full after:bg-white after:w-full after:h-full after:z-10 overflow-hidden 
            hover:after:translate-x-full after:duration-300 hover:text-slate-900'>
                <h1 className='relative z-20'>SUBMIT</h1>
            </button>
            <h1 onClick={() => setLoggingIn(!isLoggingIn)} className='relative z-20 duration-300 hover:scale-110 cursor-pointer'>{!isLoggingIn? 'Login' : 'Register'}</h1>
        </div>
    )
}