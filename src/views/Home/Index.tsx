import HomeBanner from "./components/Banner/Index";
import Breeds from "./components/Breeds/Index";
import WhyHaveCat from "./components/WhyHaveCat/Index";

export default function Home() {
    return (
        <div className="home-section">
            <HomeBanner />
            <Breeds />
            <WhyHaveCat />
        </div>
    )
};