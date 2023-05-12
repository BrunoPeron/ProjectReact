import './Styles.css';
import {Link} from "react-router-dom";
import DropDown from "./DropDown";
import User from "./User";
function Header() {
    return (
        <header className={'banner'}>
            <nav className={'header-page'}>
                <Link to={"/"}>
                    <h1>Home Page</h1>
                </Link>
                <DropDown />
                <Link to={"/"}>
                    Cadastrar receitas
                </Link>
                <Link to={"/"}>
                    Inventar receitas
                </Link>
                <User />
            </nav>
        </header>
    );
}

export default Header