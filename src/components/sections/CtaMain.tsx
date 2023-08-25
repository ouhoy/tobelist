export default function CtaMain() {
    return <section>
        <div className="cta-section section background-animation color4">
            <h4>How will tobelist help you get more things <span>done?</span></h4>
            <p>
                Writing vague one-word tasks on your to-do list prevents you from
                getting the task done faster. You’ve got to think about your to-do’s
                in concrete terms.
            </p>
            <a href="" onClick={(e) => {
                e.preventDefault()
            }} about={""} aria-label="Create an account">
                <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="32" cy="32" r="32" fill="#195BFF"/>
                    <path
                        d="M17 31C16.4477 31 16 31.4477 16 32C16 32.5523 16.4477 33 17 33V31ZM47.7071 32.7071C48.0976 32.3166 48.0976 31.6834 47.7071 31.2929L41.3431 24.9289C40.9526 24.5384 40.3195 24.5384 39.9289 24.9289C39.5384 25.3195 39.5384 25.9526 39.9289 26.3431L45.5858 32L39.9289 37.6569C39.5384 38.0474 39.5384 38.6805 39.9289 39.0711C40.3195 39.4616 40.9526 39.4616 41.3431 39.0711L47.7071 32.7071ZM17 33H47V31H17V33Z"
                        fill="white"
                    />
                </svg
                >
            </a>
        </div>
    </section>
}