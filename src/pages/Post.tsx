import { useParams } from "lib/router";

export function Post() {
    const { postId } = useParams();
    return <h1>Post {postId}</h1>;
}
