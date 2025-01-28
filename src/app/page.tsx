import HeroSection from "@/components/hero-section";
import FeaturedCourses from "@/components/featured-courses";
import WhyChooseUs from "@/components/why-choose-us";

function Home() {
    return (
        <main className={'min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'}>
            <HeroSection/>
            <FeaturedCourses/>
            <WhyChooseUs/>
        </main>
    );
}

export default Home;
