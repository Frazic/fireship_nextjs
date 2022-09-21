/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import DarkModeButton from "./DarkModeButton";
import SignOutButton from "./SignOutButton";

export default function Navbar() {
    const { user, username } = useContext(UserContext);

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <a><button title="Home Page" className="btn-logo">FEED</button></a>
                    </Link>
                </li>

                {/* user is signed-in and has a username */}
                {username && (
                    <>
                        <li className="push-left">
                            <SignOutButton />
                        </li>
                        <li>
                            <Link href="/admin">
                                <a><button title="Write Posts" className="btn-blue">Your Posts</button></a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <a><img title="User Profile" src={user?.photoURL} alt="" /></a>
                            </Link>
                        </li>
                        <li>
                            <DarkModeButton />
                        </li>
                    </>

                )}

                {/* user is not signed-in OR has not created username */}
                {!username && (
                    <li>
                        <Link href="/enter">
                            <a><button title="Log in" className="btn-blue">Log in</button></a>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}