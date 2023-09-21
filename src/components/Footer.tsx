import footerLogo from "../assets/images/Footer Logo.svg"
import {FooterLink, footerLinksParent, FooterLinksParent} from "../model/footer.ts";

export default function Footer() {

    return <footer>
        <div className={"footer-container"}>
            <div className={"tobelist"}>
                <img loading={"lazy"} src={footerLogo} alt="tobelist footer logo"/>
                <p>
                    Tobelist is the ultimate form of boosting productivity. Unlike many
                    other tools out there, this one can incorporate multiple methods.
                </p>
            </div>

            <FooterLinksContainer data={footerLinksParent}/>

            <div className={"email-cta"}>
                <label htmlFor={"news-letter-email"}
                ><p>Know about our new features & latest updates</p></label
                >
                <form action="">
                    <input
                        id="news-letter-email"
                        type="email"
                        placeholder="Enter your email address"
                    />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        <div className={"footer-end"}>
            <div className={"additional-links"}>
                <p>© 2023 Tobelist. All rights reserved.</p>
                <p><a href="https://www.instagram.com/ouhoy/" target={"_blank"}>Made with ❤️‍🔥 by @Ouhoy</a></p>
                <div>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Privacy policy</a>
                </div>
            </div>
        </div>
    </footer>

}

function FooterLinksContainer({data}: { data: FooterLinksParent[] }) {
    return <div className={"footer-link"}>
        {data.map((result: FooterLinksParent) => <FooterInfoLink title={result.title} className={result.className}
                                                                 links={result.footerLink}/>)}
    </div>
}

function FooterInfoLink({title, className, links}: { title: string, className: string, links: FooterLink[] }) {
    return <div className={className}>

        <p>{title}</p>
        {links.map((results: FooterLink) => <a className={results.title === "Status" ? "status" : ""}
                                               href={results.href}>{results.title}</a>)}
    </div>

}