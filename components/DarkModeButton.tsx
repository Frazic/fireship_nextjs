/* eslint-disable @next/next/no-img-element */
import { useContext } from "react"
import { ThemeContext } from "../lib/context"

export default function DarkModeButton() {
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

    const ChangeMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <>
            {isDarkMode &&
                <button title="Light mode" className="btn-theme">
                    < img src={'/sun.png'} width="15px" alt="Light mode" />
                </button>
            }

            {!isDarkMode &&
                <button title="Dark mode" className="btn-theme" onClick={ChangeMode}>
                    < img src={'/moon.png'} alt="Dark mode" />
                </button>
            }
        </>
    )
}