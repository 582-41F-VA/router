import { Route, Router } from "./lib/router";
import { About } from "./pages/About.tsx";
import { Home } from "./pages/Home.tsx";
import { Post } from "./pages/Post.tsx";

export default function App() {
    return (
        <Router>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/:postId" element={<Post />} />
        </Router>
    );
}
