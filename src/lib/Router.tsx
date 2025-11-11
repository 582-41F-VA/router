import { createContext, useContext, useState } from "react";

const NavigationContext = createContext({
    pathname: window.location.pathname, // initial pathname on load
    setPathname: (_: string) => {}, // placeholder; will never be called
});

type RouterProps = {
    children:
        | React.ReactElement<RouteProps>
        | Array<React.ReactElement<RouteProps>>;
};

/**
 * Render the child `Route` whose `path` prop matches the current
 * pathname. You must use the `Link` component to navigate to another
 * page.
 *
 * @example
 * <Router>
 *     <Route path="/" element={<Home />} />
 *     <Route path="/about" element={<About />} />
 * </Router>
 */
export function Router({ children }: RouterProps) {
    const initialPath = useContext(NavigationContext).pathname;
    const [pathname, setPathname] = useState(initialPath);
    const routeToRender = Array.isArray(children)
        ? children.find(child => child.props.path === pathname)
        : children; // there's only one route
    return (
        // `setPathname` is provided here so that `Link` can call it to
        // update `pathname`.
        <NavigationContext value={{ pathname, setPathname }}>
            {routeToRender || "404"}
        </NavigationContext>
    );
}

type RouteProps = {
    path: string;
    element: React.ReactElement;
};

/**
 * Map the `path` to the given `element`, which should be a page
 * component.
 */
export function Route({ element }: RouteProps) {
    return element;
}

type LinkProps = {
    to: string;
    children: React.ReactNode;
};

/**
 * When clicked, navigate `to` the given pathname.
 *
 * @example
 * <Link to="/about">About</Link>
 */
export function Link({ to, children }: LinkProps) {
    const { setPathname: navigate } = useContext(NavigationContext);
    function handleClick(e: React.MouseEvent): void {
        e.preventDefault();
        navigate(to);
    }
    return <a href={to} onClick={handleClick}>{children}</a>;
}
