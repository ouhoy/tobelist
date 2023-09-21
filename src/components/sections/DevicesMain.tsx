import devices from "../../assets/images/devices.png"

export default function Devices() {
    return (<section>
        <div className="devices-section">

            <img
                src={devices}
                className="section"
                alt="Tobelist on multiple devices"
            />

            <div className="section">
                <h4>Get and use Tobelist <span>Anytime, Anywhere!</span></h4>
                <p>
                    Writing vague one-word tasks on your to-do list prevents you from
                    getting the task done faster. You’ve got to think about your
                    to-do’s in concrete terms.
                </p>
            </div>
        </div>
    </section>)
}