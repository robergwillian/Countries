import logo from '../../assets/logo.svg';

export default function Header() {
    return (

        <header className="App-header">
            <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
            <h1>WORLD COUNTRIES</h1>
        </header>
    )
}