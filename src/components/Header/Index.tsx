import { useNavigate } from "react-router-dom";
import logo from "./../../assets/CatwikiLogo.svg";

import "./header.scss";

export default function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <img src={logo} alt="Cat Wiki Logo" onClick={() => navigate('/')} />
        </header>
    )
}