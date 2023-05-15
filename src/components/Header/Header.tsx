import './Styles.css';
import {Link} from "react-router-dom";
import DropDown from "./DropDown";
import User from "./User";
function Header() {
    return (
        <header className={'header-main'}>
            <nav className={'header-page'}>
                <Link to={"/"}>
                    <h1>Home Page</h1>
                </Link>
                <DropDown name={'Categorias'} values={[{destiny:'aaaa', name:'ss'}, {destiny:'aaaa', name:'ss'}]}/>
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