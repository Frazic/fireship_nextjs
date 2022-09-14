import MetaTags from "../../components/Metatags"
import AuthCheck from "../../components/AuthCheck"

export default function AdminPostsPage({ }) {
    return (
        <main>
            <MetaTags title="Admin page" />
            <AuthCheck>
                <h1>Admin Page</h1>
            </AuthCheck>
        </main>
    )
}