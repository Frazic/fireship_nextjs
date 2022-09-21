/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import SignOutButton from "./SignOut";

export default function Navbar() {
    const { user, username } = useContext(UserContext);

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button title="Home Page" className="btn-logo">FEED</button>
                    </Link>
                </li>

                {/* user is signed-in and has a username */}
                {username && (
                    <>
                        <li className="push-left">
                            <Link href="/admin">
                                <button title="Write Posts" className="btn-blue">Your Posts</button>
                            </Link>
                        </li>
                        <li>
                            <SignOutButton />
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <img title="User Profile" src={user?.photoURL} alt="" />
                            </Link>
                        </li>
                    </>

                )}

                {/* user is not signed-in OR has not created username */}
                {!username && (
                    <li>
                        <Link href="/enter">
                            <button title="Log in" className="btn-blue">Log in</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}