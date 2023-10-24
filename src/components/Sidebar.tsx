import React from "react";
import { X } from 'lucide-react';
import { Link } from 'react-scroll';
import { AiOutlineHome } from 'react-icons/ai'
import { MenuItems } from "@/bin/data";
import { uuid } from "@/lib/randomId";
const Sidebar = ({ toogleSidebar }: { toogleSidebar: () => void }) => {

    return (
        <div className="flex flex-col md:hidden fixed h-full w-[60%] bg-white top-0 bottom-0 z-10 right-0 py-[30px] px-7">
            <div>
                {/* <i className="flex justify-end p-5  w-[30px] h-[30px] ">
                    <X size={30} />
                </i> */}
                <i className="flex justify-center items-center bg-[#274c6a]  w-[50px] h-[50px] rounded-[50%] ml-auto
                relative
                ring-animation
                cursor-pointer
                "
                    onClick={toogleSidebar}
                >
                    <X size={30} color="#fff" />
                </i>
            </div>
            <ul className="flex flex-col gap-5 list-none grow-[4] mt-[40px]">
                {
                    MenuItems.map((val) => (
                        <li className=" border-b border-black pb-[30px] flex gap-[10px] items-center" key={uuid()}>
                            {/* <Home /> */}
                            <AiOutlineHome />
                            <Link
                                activeClass="isActive"
                                to={val.sectionId}
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                                className='cursor-pointer'
                                onClick={toogleSidebar}
                            >
                                {val.item}
                            </Link>
                        </li>
                    ))
                }

                {/* <li >About</li>
                    <li>Services</li> */}
            </ul>
        </div>
    );
};

export default Sidebar;
