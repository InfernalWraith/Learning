import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
    // This state only exists to make the component rerender
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        // This state only exists to make the component rerender
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []);

    return (
        currentPath === path 
        ? children
        : null
    );
}

export default Route;
