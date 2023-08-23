import '../styles/main.css'
import Navbar from "./Navbar.tsx";
import Header from "./Header.tsx";
import Main from "./Main.tsx";

function App() {


    return (
        <div className={"container"}>
            <Navbar/>
            <Header/>
            <Main/>

        </div>
    )
}

export default App