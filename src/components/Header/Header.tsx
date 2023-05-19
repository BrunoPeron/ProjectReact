import './Styles.css';
import {Link} from "react-router-dom";
import DropDown from "./DropDown";
import User from "./User";
function Header() {
    return (
        <header className={'header-main'}>
            <nav className={'header-page'}>
                <Link to={"/"}>
                    <div className={'header-button-nav'}>Home page</div>
                </Link>
                <DropDown name={'Categoriasx'} values={[
                    {destiny:'ddd', name:'xxs'}, {destiny:'aaaa', name:'ss'}
                ]}/>
                <Link to={"/"}>
                    <div className={'header-button-nav'}>Cadastrar receitas</div>
                </Link>
                <Link to={"/"}>
                    <div className={'header-button-nav'}>Inventar receitas</div>
                </Link>
                <User />
            </nav>
        </header>
    );
}
export default Header