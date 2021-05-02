import { useRouter} from 'next/router';

function PortfolioDynamicPage() {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h1>Portfolio Dynamic Page</h1>
        </div>
    );
}

export default PortfolioDynamicPage;