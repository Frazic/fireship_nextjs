import Link from "next/link";
import HeartCount from "./HeartCount";

export default function PostFeed({ posts, admin }) {
    return posts?.length > 0 ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />) : <p>There are no posts 😮, how about you write the first one?</p>;
}

function PostItem({ post, admin = false }) {

    const wordCount = post?.content.trim().split(/\s+/g).length;
    const minutesToRead: number = Number.parseInt((wordCount / 100 + 1).toFixed(0));

    return (
        <div className="card">
            <Link href={`/${post.username}`}>
                <a title={"To " + post.username + "'s profile"}>
                    By <strong className="text-info">@{post.username}</strong>
                </a>
            </Link>

            <Link href={`/${post.username}/${post.slug}`}>
                <h2>
                    <a title={"Read \"" + post.title + "\""}>{post.title}</a>
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