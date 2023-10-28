
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image'
import heroImage from '@/assets/hero2.png'
const About = () => {
    return (
        <div className="aboutSection" id='about_section'>
            <div className="section md:grid grid-cols-2 " >
                <div className="lhs hidden md:block">
                    {/* <img src="/hero2.png" alt="" className='w-[60%]' /> */}
                    <Image
                        src={heroImage}
                        alt='heroImage'
                        className='w-[60%]'
                    />
                </div>
                <div className="rhs">
                    <div className='mt-[40px] flex flex-col gap-5'>
                        <span className='text-sm'>ABOUT ME</span>
                        <h1 className='font-bold text-4xl'>PERSONAL DETAILS</h1>
                        <p className='text-lg'>Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <div>
                            <Button className='bg-btnBg rounded-none px-[30px] uppercase hover:shadow-btnHoverShadow transition-all duration-300 delay-0'>
                                <Link href="https://github.com/imarjunshrma" target='_blank'>
                                    View Full Details
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
