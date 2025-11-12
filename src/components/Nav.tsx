import { Link } from "lib/router";

export function Nav() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </>
    );
}
