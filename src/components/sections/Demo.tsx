import videoBackground from "../../assets/images/Background Vidoe.jpg"
import playButton from "../../assets/images/Play Button.svg"

export default function Demo() {
    return <section className="demo-section section section--hidden">
        <div className="title-description">
            <h3>You can now get more things <span>done</span></h3>
            <p>
                Writing vague one-word tasks on your to-do list prevents you from
                getting the task done faster. You’ve got to think about your to-do’s
                in concrete terms.
            </p>
        </div>
        <div className="video-container">
            <img loading={"lazy"} src={playButton} className={"play-button"} alt={"play button"}/>
            <img
                src={videoBackground}
                alt="Workspace, image by Vero Photoart"
            />
        </div>
    </section>
}