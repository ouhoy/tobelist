import '../styles/main.css'
import Navbar from "./Navbar.tsx";
import Header from "./Header.tsx";
import Main from "./Main.tsx";
import Faq from "./Faq.tsx";
import {faqs} from "../model/homePageData.ts";

function App() {


    return (
        <div className={"container"}>
            <Navbar/>
            <Header/>
            <Main/>
            <Faq faqs={faqs}/>

        </div>
    )
}

export default App