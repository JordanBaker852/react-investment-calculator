import logo from "../../assets/investment-calculator-logo.png";
import "./header.css";

export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt="Logo of a money bag" />
            <h1>Investment Calculator</h1>
        </header>
    );
}