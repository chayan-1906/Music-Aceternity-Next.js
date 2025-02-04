import coursesData from '@/data/music-courses.json';
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";
import Image from "next/image";

interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
}

function Courses() {
    return (
        <div className={'min-h-screen bg-black py-12 pt-36'}>
            <h1 className={'text-lg md:text-7xl text-center font-sans font-bold mb-8 tracking-wide'}>All Courses ({coursesData.courses.length})</h1>
            <div className={'flex flex-wrap justify-center'}>
                {coursesData.courses.map((course: Course) => {
                    const {id, title, slug, description, price, instructor, isFeatured, image} = course;

                    return (
                        <CardContainer key={id} className={'m-4'}>
                            <CardBody
                                className={'bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'}>
                                <CardItem translateZ='50' className='text-xl font-bold text-neutral-600 dark:text-white'>{title}</CardItem>
                                <CardItem as={'p'} translateZ={'60'} className={'text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'}>{description}</CardItem>
                                <CardItem translateZ={'100'} className={'w-full mt-4'}>
                                    <Image src={image} alt={title} height={'1000'} width={'1000'} className={'h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'}/>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    );
                })}
            </div>
        </div>
    );
}

export default Courses;
