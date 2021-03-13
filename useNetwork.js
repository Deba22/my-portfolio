//not used
import { useState, useEffect } from 'react';

function useNetwork() {
    const [network, setNetwork] = useState(null);
    useEffect(() => {
        setNetwork(window.navigator.onLine);
    },[]);
    useEffect(() => {
        const updateNetwork = () => {
            setNetwork(window.navigator.onLine);
        };
        window.addEventListener("offline", updateNetwork);
        window.addEventListener("online", updateNetwork);
        return () => {
            window.removeEventListener("offline", updateNetwork);
            window.removeEventListener("online", updateNetwork);
        };
    },[network]);
    return network;
}

export default useNetwork;
