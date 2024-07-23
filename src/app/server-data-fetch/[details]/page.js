import axios from "axios"

const apiFetching = async (userId)=>{
    console.log(userId)
    try{
        const response = await axios.get(`https://dummyjson.com/users/${userId}`)
        const result = response.data
        return result;
    } catch(e){
        throw new Error (e)
    }
}

export default async function userDetailsPage({params}){
    const dataReceived = await apiFetching(params.details)
    // console.log(dataReceived)
    return(
        <div className='my-5 display-flex justifyContent-center alignItems-center'>
            <ul>
                Hello
                <li>firstName: {dataReceived.firstName}</li>
                <li>lastName: {dataReceived.lastName}</li>
                <li>age: {dataReceived.age}</li>
                <li>phone: {dataReceived.phone}</li>
            </ul>
        </div>
    )
}