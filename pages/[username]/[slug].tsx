import styles from "../../styles/Post.module.css"
import { firestore, getUserWithUsername, postToJSON } from "../../lib/firebase"
import { useDocumentData } from "react-firebase-hooks/firestore"
import PostContent from "../../components/PostContent";

// Tells next to get data from server at build time
export async function getStaticProps({ params }) {
    // Comes from the URL parameters
    const { username, slug } = params

    // Get user doc from firestore
    const userDoc = await getUserWithUsername(username);

    let post;
    let path;

    if (userDoc) {
        // If user doc exists then get the post using the slug as ID
        const postRef = userDoc.ref.collection("posts").doc(slug);
        post = postToJSON(await postRef.get());

        // This will be used to make it easier to refetch data during later hydration
        path = postRef.path;
    }

    // Return this as props to the page
    return {
        props: { post, path },
        revalidate: 5000, // Next will regenerate page at most every 5s
    };
}

// Tells next which post corresponds to which path
export async function getStaticPaths() {
    const snapshot = await firestore.collectionGroup("posts").get();

    const paths = snapshot.docs.map((doc) => {
        const { slug, username } = doc.data();
        return {
            params: { username, slug },
        };
    });

    return {
        paths,
        fallback: "blocking", // When an unrendered page is accessed, this forces Next to manually server-side render it
    }
}

export default function Post(props) {
    // Easy access to document with direct path inside firestore
    const postRef = firestore.doc(props.path);
    const [realtimePost] = useDocumentData(postRef);

    // Gets the latest version of the post, or fallsback to the prerendered data
    const post = realtimePost || props.post;

    return (
        <main className={styles.container}>

            <section>
                <PostContent post={post} />
            </section>

            <aside className="card">
                <p>
                    <strong>{post.heartCount || 0} 💗</strong>
                </p>
            </aside>
        </main>
    )
}