import { Route, Router } from "./lib/Router.tsx";
import { About } from "./pages/About.tsx";
import { Home } from "./pages/Home.tsx";

export default function App() {
    return (
        <Router>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Router>
    );
}
