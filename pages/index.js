import link from 'next/link';

function Home() {
    return (<div>
        <h1>Home</h1>

        <link href="/paranat">
            <a>Acessar area VIP</a>
        </link>
        </div>)
}

export default Home