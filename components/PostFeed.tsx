import Link from "next/link";
import HeartCount from "./HeartCount";

export default function PostFeed({ posts, admin }) {
    return posts ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />) : <></>;
}

function PostItem({ post, admin = false }) {

    const wordCount = post?.content.trim().split(/\s+/g).length;
    const minutesToRead: number = Number.parseInt((wordCount / 100 + 1).toFixed(0));

    return (
        <div className="card">
            <Link href={`/${post.username}`}>
                <a>
                    <strong>By @{post.username}</strong>
                </a>
            </Link>

            <Link href={`/${post.username}/${post.slug}`}>
                <h2>
                    <a>{post.title}</a>
                </h2>
            </Link>

            <footer>
                <span>
                    {wordCount} words. {minutesToRead} minute{minutesToRead > 1 ? "s" : ""} to read
                </span>
                <span className="push-left"><HeartCount heartCount={post.heartCount} /></span>
            </footer>
        </div>
    );

}