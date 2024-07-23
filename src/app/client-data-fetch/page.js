'use client'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function() {
    const {data, error, isLoading} = useSWR('https://dummyjson.com/users', fetcher);
    console.log(data)
    if (error) return <h1>Failed to load</h1>
    if (isLoading) return <h1 className='fontSize-80px'>Loading... Please Wait!!</h1>
    
    return (
        <div>
            <h1>Client Side Data Fetching</h1>
            <ul>
                {data.users.map((users)=>{
                    return <li key={users.id}>{users.firstName}</li>
                })}
            </ul>
        </div>
    )
}