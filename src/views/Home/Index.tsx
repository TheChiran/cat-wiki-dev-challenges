import HomeBanner from "./components/Banner/Index";
import Breeds from "./components/Breeds/Index";

export default function Home() {
    return (
        <div className="home-section">
            <HomeBanner />
            <Breeds />
        </div>
    )
};