import logo from "../assets/images/logo.svg"
import menu from "../assets/images/menu.svg"


export default function Navbar() {
    return <div className={"container"}>
        <div className={"nav-container"}>
            <nav>
                <img loading={"lazy"}
                    src={menu}
                    className="hide-for-desktop hamburger-menu"
                    alt="menu"
                />

                <div className="logo">
                    <img src={logo} alt="Tobelist logo"/>
                </div>
                <div className="menu-cta">
                    <div className="menu hide-for-mobile hide-for-tablet">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Privacy</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </div>

                    <div className="cta">
                        <a href="#">Login</a>
                        <button className="hide-for-mobile hide-for-tablet">
                            Get started
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    </div>
}