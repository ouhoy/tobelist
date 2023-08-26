import footerLogo from "../assets/images/Footer Logo.svg"

export default function Footer() {

    return <footer>
        <div className={"footer-container"}>
            <div className={"tobelist"}>
                <img src={footerLogo} alt="tobelist footer logo"/>
                <p>
                    Tobelist is the ultimate form of boosting productivity. Unlike many
                    other tools out there, this one can incorporate multiple methods.
                </p>
            </div>
            <div className={"footer-link"}>
                <div className={"company"}>
                    <p>Company</p>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </div>
                <div className={"team"}>
                    <p>Team</p>
                    <a href="#">Development</a>
                    <a href="#">Design</a>
                    <a href="#">Join us</a>
                </div>
                <div className={"help"}>
                    <p>Help</p>
                    <a href="#">Talk to support</a>
                    <a href="#">FAQ</a>
                    <a href="#">Security</a>
                </div>
            </div>
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
                <p><a href="#">@Ouhoy</a></p>
                <div>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Privacy policy</a>
                </div>
            </div>
        </div>
    </footer>

}