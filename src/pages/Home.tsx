import { Nav } from "components/Nav.tsx";
import { useEffect, useState } from "react";

export function Home() {
    const [colors, setColors] = useState<Array<string>>([]);

    useEffect(() => {
        let ignore = false;
        async function fetchData(): Promise<void> {
            const res = await fetch("/api/colors");
            if (ignore) return;
            setColors(await res.json());
        }
        fetchData();
        return () => {
            ignore = true;
        };
    }, []);

    return (
        <>
            <Nav />
            <ul>
                {colors.map(c => <li>{c}</li>)}
            </ul>
        </>
    );
}

// 1. Render component
// 2. Call effect callback
