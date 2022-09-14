import MetaTags from "../../components/Metatags"
import styles from '../../styles/Admin.module.css';
import AuthCheck from '../../components/AuthCheck';
import PostFeed from '../../components/PostFeed';
import { UserContext } from '../../lib/context';
import { firestore, auth, serverTimestamp } from '../../lib/firebase';

import { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import { useCollection } from 'react-firebase-hooks/firestore';
import kebabCase from 'lodash.kebabcase';
import toast from 'react-hot-toast';

export default function AdminPostsPage({ }) {
    return (
        <main>
            <MetaTags title="Admin page" />
            <AuthCheck>
                <PostList />
                <CreateNewPost />
            </AuthCheck>
        </main>
    )
}

function PostList() {
    // Reference to the currently authenticated user's posts in firestore
    const ref = firestore.collection("users").doc(auth.currentUser.uid).collection("posts");
    const query = ref.orderBy("createdAt");

    // Hook to read collection in realtime
    const [querySnapshot] = useCollection(query);

    // Get the data from each post document
    const posts = querySnapshot?.docs.map((doc) => doc.data());

    return (
        <>
            <h1>Manage your posts!</h1>
            <PostFeed posts={posts} admin />
        </>
    );
}

function CreateNewPost() {
    const router = useRouter();
    const { username } = useContext(UserContext);

    const [title, setTitle] = useState("");

    // Ensure slug is URI safe
    const slug = encodeURI(kebabCase(title));

    // Validate length
    const isValid = title.length > 3 && title.length < 100;

    const createPost = async (e) => {
        e.preventDefault();
        const uid = auth.currentUser.uid;

        // Reference to a post that doesn't exist yet
        const ref = firestore.collection("users").doc(uid).collection("posts").doc(slug)

        // Data that will go into newly created post
        const data = {
            title,
            slug,
            uid,
            username,
            published: false,
            content: "# Hello World!",
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            heartCount: 0,
        };

        // Commit document to firestore
        await ref.set(data);

        toast.success("Post Created!");

        // Force navigate to the post's edit page
        router.push(`/admin/${slug}`);
    }

    return (
        <form onSubmit={createPost}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="My Awesome Article"
                className={styles.input}
            />

            <p>
                <strong>Slug: </strong> {slug}
            </p>

            <button type="submit" disabled={!isValid} className="btn-green">
                Create new post
            </button>
        </form>
    );
}