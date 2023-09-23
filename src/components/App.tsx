import '../styles/main.css'
import Navbar from "./Navbar.tsx";
import Header from "./Header.tsx";
import Main from "./Main.tsx";
import Faq from "./Faq.tsx";
import {faqs} from "../model/homePageData.ts";
import Footer from "./Footer";

function App() {


    return (
        <>
            <div className={"construction-warning"}>Tobelist in maintenance mode  ⚙️️</div>

            <div className={"container"}>
                <Navbar/>
                <Header/>
                <Main/>
                <Faq faqs={faqs}/>
                <Footer/>

            </div>

        </>
    )
}

export default App