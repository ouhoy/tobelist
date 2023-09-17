import laptopBoy from "../assets/images/3d-man2.webp"
import {data, Medal} from "../model/medals.ts";

export default function Header() {

    return <header>
        <div className="header-content">
            <h1>Forget your Todolist<br/>Create your Tobelist</h1>
            <p>
                Tobelist is the ultimate form of boosting productivity. Unlike many
                other tools out there, this one can incorporate multiple methods.
            </p>
            <button>Create my tobelist -free</button>
            <Medals data={data}/>
        </div>
        <picture>
            <source type={"image/webp"} />
        <img loading={"lazy"}
            src={laptopBoy}
            alt="tobelist man 3d character"
            className="hide-for-tablet hide-for-mobile"

        />
        </picture>
    </header>

}

function Medals({data}: { data: Medal[] }) {
    return <div className={"numbers"}>
        {data.map((result: Medal) => <NumberCounter medal={result.medal} description={result.description}
                                                    symbol={result.symbol}></NumberCounter>)}

    </div>
}

function NumberCounter({medal, description, symbol}: { medal: number, description: string, symbol: string }) {


    return <div className={"num"}>
        <h4>{medal < 100 ? `0${medal}` : medal}{symbol}</h4>
        <p>{description}</p>
    </div>
}