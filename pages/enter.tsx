import Image from "next/image";
import { auth, googleAuthProvider } from "../lib/firebase";

export default function EnterPage({ }) {
    const user = null;
    const username = null;

    /*
    1. User signed out => Show SignInButton
    2. User signed in but no username => Show UsernameForm
    3. User signed in and has username => Show SignOutButton
    */
    return (
        <main>
            {
                user ?
                    username ? <SignOutButton /> : <UsernameForm />
                    :
                    <SignInButton />
            }
        </main>
    )
}

// Sign in with Google Button
function SignInButton() {
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider);
    };

    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <img src="/google.png" alt="Google logo" width="30px" height="30px" style={{ marginRight: "10px" }} />Sign in with Google
        </button>
    )
}

// Sign out button
function SignOutButton() {
    return <button onClick={() => auth.signOut}>Sign Out</button>
}

function UsernameForm() {

}