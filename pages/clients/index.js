import Link from "next/link";

function ClientsListPage() {
    const clients = [
        { id: "one", name: "Client One" },
        { id: "two", name: "Client Two" }
    ]
    return (
        <div>
            <h1>Clients List Page</h1>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        {/* <Link href={`/clients/${client.id}`}> */}
                        <Link href={{
                            pathname: '/clients/[id]',
                            query: {id:client.id}
                        }}>
                            {client.name}
                        </Link>
                    </li>
                ))}
                {/* <li>
                    <Link href="/clients/one">Client One</Link>
                </li>
                <li>
                    <Link href="/clients/two">Client Two</Link>
                </li> */}
            </ul>
        </div>
    );
}

export default ClientsListPage;