import { useRouter } from "next/router";

function ClientSpecificPage() {
    const router = useRouter();

    function submitHanlder() {
        router.push({
            pathname: "/clients/[id]/[clientpid]",
            query: {id:'clone', clientpid: '1'}
        });
    }

    return (
        <div>
            <h1>Client Specific Page</h1>
            <button onClick={submitHanlder}>SUBMIT</button>
        </div>
    );
}

export default ClientSpecificPage;