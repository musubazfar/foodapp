import axios from 'axios';

async function dataFetching() {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        const userData = response.data;

        return userData;
    } catch (e) {
        console.error(e);
    }
}

export default async function serverSideDataFetching() {
    const fetching = await dataFetching();
    console.log(fetching);
    return (
        <div>
            <h1>This is server side data fetching page</h1>
        </div>
    );
}