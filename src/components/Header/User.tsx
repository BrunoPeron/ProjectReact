import './Styles.css';
function User() {
    return (
        <div className={'dropdown-user'}>
            <button className={'dropdown-button'}>UsuarioName</button>
            <div className={'dropdown-content'}>
                <a href='#'>Perfil</a>
                <a href='#'>Configurações</a>
                <a href='#'>Modo escuro</a>
            </div>
        </div>
    );
}

export default User