"use client"
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Sidebar from './Sidebar';
import { MenuItems } from '@/bin/data';
import { uuid } from '@/lib/randomId';
import ScrollProgress from './ScrollProgress';
import logo from '@/assets/logo.png.webp';
import Image from 'next/image';
const Header = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const toogleSidebar = () => {
        setIsOpenSidebar(!isOpenSidebar);
    }
    const [isSticky, setIsSticky] = useState(false);
    const onScroll = () => {
        if (window.scrollY > 30) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [])

    return (
        <>
            <header className="bg-white bi
        header
        "
                style={isSticky ? { position: "fixed", top: 0, left: 0, right: 0, width: "100%", zIndex: 9, boxShadow: "-21.213px 21.213px 30px 0px rgba(158, 158, 158, 0.3)" } : { position: "relative" }}
                id='headerContainer'
            >
                <nav className='flex justify-between md:w-[1200px] w-full md:mx-auto items:center  h-[60px] p-[10px]'>


                    {/* icon */}
                    <div className="icon">
                        <Image src={logo} alt='logo' />
                    </div>
                    <div className="mobile-menu md:hidden cursor-pointer" onClick={toogleSidebar}>
                        <Menu />
                    </div>
                    <ul className="hidden md:flex gap-5 list-none items-center">
                        {
                            MenuItems.map((val) => (
                                <Link
                                    activeClass="isActive"
                                    to={val.sectionId}
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    className='cursor-pointer'
                                    key={uuid()}
                                >
                                    {val.item}
                                </Link>
                            ))
                        }
                    </ul>
                </nav>
                <ScrollProgress />
            </header>
            {
                isOpenSidebar ? <Sidebar toogleSidebar={toogleSidebar} /> : ""
            }
        </>
    )
};

export default Header;
