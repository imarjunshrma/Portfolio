import React from "react";
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import heroImage from '@/assets/hero2.png'
const HeroSection = () => {
    return (
        <>
            <div className="bannerSection bg-[#f9f9ff]" id='banner_section'>
                <div className="section block md:grid grid-cols-2 py-5">
                    <div className="lhs">
                        <div className='mt-[40px] flex flex-col gap-5'>
                            <span className='text-sm'>THIS IS ME</span>
                            <h1 className='font-bold text-4xl'>
                                <Typewriter
                                    options={{
                                        strings: ['Arjun Sharma'],
                                        autoStart: true,
                                        loop: true,
                                        cursorClassName: 'font-medium'
                                    }}

                                />
                            </h1>
                            <p className='text-lg'>You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.</p>
                            <div>
                                <Button className='bg-btnBg rounded-none px-[30px] uppercase hover:shadow-btnHoverShadow transition-all duration-300 delay-0'>
                                    <Link
                                        activeClass="isActive"
                                        to="contact_section"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                        className='cursor-pointer'
                                    >

                                        Discover Now
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="rhs hidden md:block">
                        {/* <img src="/hero2.png" alt="" className='w-[60%] ms-auto' /> */}
                        <Image
                            src={heroImage}
                            alt='heroImage'
                            className="w-[60%] ms-auto"
                        // width={1000}
                        />
                    </div>
                </div>
            </div>
        </>
    )
};

export default HeroSection;
