import './Styles.css';
function DropDown() {
    return (
        <div className='dropdown-categories'>
            <button className={'dropdown-button'}>Categorias</button>
            <div className={'dropdown-content'}>
                <a href='#'>Lanches</a>
                <a href='#'>Almoço</a>
                <a href='#'>Janta</a>
            </div>
        </div>
    );
}

export default DropDown