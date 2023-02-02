import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Spinner } from '@chakra-ui/react';

const Dashboard = () => {

    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
        if (!user && !loading) {
            router.push('/login');
        }
    }, [loading, user]);

    return (
        <div>
            {loading && <Spinner />}
            <h1>Dashboard</h1>
        </div>
    );
};

// export the component
export default Dashboard;
