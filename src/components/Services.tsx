"use client"
import { Brush, Code } from "lucide-react";
import React, { useEffect, useId, useRef, useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ArrowLeft, ArrowRight, Apple } from 'lucide-react';
import { uuid } from "@/lib/randomId";

const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault();
const itemsList = [
    <div className="card group" onDragStart={handleDragStart} role="presentation" key={uuid()}>
        <Brush size={50} color='#8490FF' className='group-hover:stroke-white' />
        <h3>Web Design</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
    </div>,
    <div className="card group" onDragStart={handleDragStart} role="presentation" key={uuid()}>
        <Apple size={50} color='#8490FF' className='group-hover:stroke-white' />
        <h3>IOS Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
    </div>,
    <div className="card group" onDragStart={handleDragStart} role="presentation" key={uuid()}>
        <Code size={50} color='#8490FF' className='group-hover:stroke-white' />
        <h3>Apps Design</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
    </div>,
    <div className="card group" onDragStart={handleDragStart} role="presentation" key={uuid()}>
        <Brush size={50} color='#8490FF' className='group-hover:stroke-white' />
        <h3>Web Design</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
    </div>,
    <div className="card group" onDragStart={handleDragStart} role="presentation" key={uuid()}>
        <Brush size={50} color='#8490FF' className='group-hover:stroke-white' />
        <h3>Web Design</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
    </div>,
];

const Services = () => {
    const carousel = useRef<AliceCarousel>(null);
    const [items, setItems] = useState<React.JSX.Element[]>()
    const updateSlide = (e: any, x: any) => {
        if (x === "prev") {
            carousel.current?.slidePrev(e);
        } else {
            carousel.current?.slideNext(e);
        }
    }
    useEffect(() => {
        setItems(itemsList)

    }, [])
    return (
        <div className='bg-[#111] text-white' id="services_section">
            <div className="section ">
                <div className="title">
                    <h2 className='text-center text-4xl font-bold  after-line'>My services</h2>
                </div>
                {/* cards */}
                <div className='relative '>

                    <AliceCarousel mouseTracking items={items} disableDotsControls
                        ref={carousel}
                        disableButtonsControls
                        responsive={{
                            0: {
                                items: 1
                            },
                            1024: {
                                items: 3,
                                itemsFit: 'contain'
                            }
                        }}
                        paddingRight={10}
                        controlsStrategy="alternate"
                        infinite
                    />
                    <div key="btns" className="b-refs-buttons absolute top-0 bottom-0 my-auto flex  items-center justify-between left-[-10px] right-[4px]">
                        <button onClick={(e) => updateSlide(e, "prev")} className="p-2 flex justify-center items-center bg-primaryColor text-white rounded-[50%]" >

                            <ArrowRight />
                        </button>
                        <button onClick={(e) => updateSlide(e, "next")} className="p-2 flex justify-center items-center bg-primaryColor text-white rounded-[50%]">
                            <ArrowLeft />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Services;
