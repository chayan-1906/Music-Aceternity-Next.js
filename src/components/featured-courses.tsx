import Link from "next/link";
import Routes from "@/utils/routes";
import courseData from '../data/music-courses.json';
import {BackgroundGradient} from "@/components/ui/background-gradient";

interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

    return (
        <div className={'py-12 bg-gray-900'}>
            <div>
                <div className={'text-center'}>
                    <h2 className={'uppercase text-base text-teal-600 font-semibold tracking-wide'}>Featured Courses</h2>
                    <h2 className={'mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'}>Learn with the Best</h2>
                </div>
            </div>
            <div className={'mt-10 p-4'}>
                <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'}>
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className={'flex justify-center'}>
                          <BackgroundGradient className={'flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'}>
                              <div className={'flex flex-col flex-grow p-4 sm:p-6 items-center text-center'}>
                                  <p>{course.title}</p>
                                  <p>{course.description}</p>
                                  <Link href={Routes.course(course.slug)} className={'mt-2'}>Learn More</Link>
                              </div>
                          </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className={'mt-20 text-center'}>
                <Link href={Routes.courses} className={'px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'}>View All Courses</Link>
            </div>
        </div>
    );
}

export default FeaturedCourses;
