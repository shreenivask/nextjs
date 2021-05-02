import { useRouter } from "next/router";

function ClientSpecificProjectPage() {
    const router = useRouter();
    console.log(router.query);
    
    return (
        <div>
            <h1>Client Specific Project Page</h1>
        </div>
    );
}

export default ClientSpecificProjectPage;