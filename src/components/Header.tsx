import laptopBoy from "../assets/images/3d man.svg"

export default function Header() {

    return <header>
        <div className="header-content">
            <h1>Forget your todo list<br/>Create your tobe list</h1>
            <p>
                Tobelist is the ultimate form of boosting productivity. Unlike many
                other tools out there, this one can incorporate multiple methods.
            </p>
            <button>Create my tobelist -free</button>
            <div className="numbers">
                <div className="num">
                    <h4>030+</h4>
                    <p>users trust us</p>
                </div>
                <div className="num">
                    <h4>900+</h4>
                    <p>completed tasks</p>
                </div>
                <div className="num">
                    <h4>100%</h4>
                    <p>open source</p>
                </div>
            </div>
        </div>
        <img
            src={laptopBoy}
            alt="tobelist man 3d character"
            className="hide-for-tablet hide-for-mobile"

        />
    </header>

}