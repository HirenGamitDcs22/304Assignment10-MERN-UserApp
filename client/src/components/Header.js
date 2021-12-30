const Header = ({title}) => {
    return (
        <header className="header" style={{color: 'red',backgroundColor: 'black',padding:20}}>
            <h1 >{title}</h1>
        </header>
    )
}
Header.defaultProps = {
    title: 'User',
}
export default Header