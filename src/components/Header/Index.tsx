import logo from "./../../assets/CatwikiLogo.svg";

import "./header.scss";

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Cat Wiki Logo" />
        </header>
    )
}