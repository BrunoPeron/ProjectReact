import './Styles.css';
function User() {
    return (
        <div className={'dropdown-user'}>
            <button className={'dropdown-button'}>UsuarioName</button>
            <div className={'dropdown-content'}>
                <a href='#'>Lanches</a>
                <a href='#'>Almoço</a>
                <a href='#'>Janta</a>
            </div>
        </div>
    );
}

export default User