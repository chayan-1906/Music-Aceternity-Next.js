import Link from "next/link";
import Routes from "@/utils/routes";
import {Spotlight} from "@/components/ui/Spotlight";
import {Button} from "@/components/ui/moving-border";

function HeroSection() {
    return (
        <div className={'relative flex flex-col h-auto md:h-[40rem] w-full mx-auto py-10 md:py-10 items-center justify-center rounded-md overflow-hidden'}>
            <Spotlight className={'-top-40 left-0 md:left-60 md:-top-20'} fill={'cyan'}/>
            <div className={'p-4 relative z-10 w-full text-center'}>
                <h1 className={'mt-20 md:mt-16 text-4xl sm:text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'}>Master the art of Music</h1>
                <p className={'mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'}>
                    Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills, join us to unlock your true
                    potential.
                </p>
                <div className={'mt-4'}>
                    <Link href={Routes.courses}>
                        <Button borderRadius={'1.75rem'} className={'bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'}>
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
