import { Link, useLocation } from "lib/router";

export function Nav() {
    const { pathname } = useLocation();
    return (
        <>
            <span className={pathname === "/" ? "current" : ""}>
                <Link to="/">Home</Link>
            </span>
            <span className={pathname === "/about" ? "current" : ""}>
                <Link to="/about">About</Link>
            </span>
        </>
    );
}
