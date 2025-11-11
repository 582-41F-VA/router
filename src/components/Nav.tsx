import { Link } from "lib/Router.tsx";

export function Nav() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </>
    );
}
