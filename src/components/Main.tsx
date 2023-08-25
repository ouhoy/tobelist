import Explore from "./sections/Explore.tsx";
import Demo from "./sections/Demo.tsx";
import CtaMain from "./sections/CtaMain.tsx";
import Devices from "./sections/DevicesMain.tsx";

export default function Main() {
    return <main>
        <Explore/>
        <Demo/>
        <CtaMain/>
        <Devices/>
    </main>
}