import { auth, googleAuthProvider } from "../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import SignOutButton from "../components/SignOut";

export default function Enter(props) {
    const { user, username } = useContext(UserContext);

    /*
    1. User signed out => Show SignInButton
    2. User signed in but no username => Show UsernameForm
    3. User signed in and has username => Show SignOutButton
    */
    return (
        <main>
            {user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />}
        </main>
    )
}

// Sign in with Google Button
function SignInButton() {
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider);
    };

    return (
        <>
            <button className="btn-google" onClick={signInWithGoogle}>
                <img src={'/google.png'} width="30px" /> Sign in with Google
            </button>
        </>
    );
}

function UsernameForm() {
    return <div>Hi</div>
}