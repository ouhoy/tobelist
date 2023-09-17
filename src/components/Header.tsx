import laptopBoy from "../assets/images/3d-man2.webp"

export default function Header() {

    return <header>
        <div className="header-content">
            <h1>Forget your Todolist<br/>Create your Tobelist</h1>
            <p>
                Tobelist is the ultimate form of boosting productivity. Unlike many
                other tools out there, this one can incorporate multiple methods.
            </p>
            <button>Create my tobelist -free</button>
            <Numbers></Numbers>
        </div>
        <img
            src={laptopBoy}
            alt="tobelist man 3d character"
            className="hide-for-tablet hide-for-mobile"

        />
    </header>

}

function Numbers() {
    return <div className={"numbers"}>
        <NumberCounter counter={30} description={"users trust us"} symbol={"+"}></NumberCounter>
        <NumberCounter counter={900} description={"completed tasks"} symbol={"+"}></NumberCounter>
        <NumberCounter counter={100} description={"for productivity"} symbol={"%"}></NumberCounter>
    </div>
}

function NumberCounter({counter, description, symbol}: { counter: number, description: string, symbol: string }) {
    

    return <div className={"num"}>
        <h4>{counter < 100 ? `0${counter}` : counter}{symbol}</h4>
        <p>{description}</p>
    </div>
}