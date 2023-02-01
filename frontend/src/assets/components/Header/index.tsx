import logo from "../../img/logo.svg";

import "./styles.css";

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a target="_blank" href="https://github.com/brunoalberto1618"> github.com/brunoalberto1618</a>
                    </p>
            </div>
        </header>
    )
}

export default Header;