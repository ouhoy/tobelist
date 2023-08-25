import devices from "../../assets/images/devices.png"

export default function Devices() {
    return (<section>
        <div className="devices-section">
            <div className="section">
                <h4>This is a place holder <span>For visual content</span></h4>
                <p>
                    Writing vague one-word tasks on your to-do list prevents you from
                    getting the task done faster. You’ve got to think about your
                    to-do’s in concrete terms.
                </p>
            </div>
            <img
                src={devices}
                className="section"
                alt="Tobelist on multiple devices"
            />
        </div>
    </section>)
}