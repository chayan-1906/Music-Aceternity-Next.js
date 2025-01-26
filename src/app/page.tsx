import HeroSection from "@/components/hero-section";
import FeaturedCourses from "@/components/featured-courses";

function Home() {
    return (
        <main className={'min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'}>
            <HeroSection/>
            <FeaturedCourses/>
        </main>
    );
}

export default Home;
