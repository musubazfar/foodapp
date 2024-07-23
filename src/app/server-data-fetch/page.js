import axios from "axios";
import Link from "next/link";

async function dataFetching() {
    try {
        const response = await axios('https://dummyjson.com/users');
        const userData = response.data.users;
        return userData;
    } catch (e) {
        console.error(e);
    }
}

export default async function serverSideDataFetching() {
    const fetching = await dataFetching();
    return (
        <div className='p-10'>
            <h1>Server side data fetching: User list page</h1>
            <ul>
                {fetching && fetching.length > 0 
                ? fetching.map(item => {
                        return <li key={item.id} className='mt-5 cursor-pointer'>
                           <Link href={`/server-data-fetch/${item.id}`} > {item.firstName}</Link>
                            </li>
                    })
                : null}
            </ul>
        </div>
    );
};;