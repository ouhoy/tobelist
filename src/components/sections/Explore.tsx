import tobelistPreview from "../../assets/images/App Preview.svg"


export default function Explore() {
    return <section className="explore">
        <div className="explore-section  background-animation color4">
            <h2>Make your life more efficient</h2>
            <p>
                Tobelist is the ultimate form of boosting productivity. Unlike many
                other <br/>
                tools out there, this one can incorporate multiple methods.
            </p>
            <img
                src={tobelistPreview}
                className="section"
                alt="tobelist web app"
            />
        </div>
    </section>
}