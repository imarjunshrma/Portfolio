"use client"
import NProgress from 'nprogress';
import { useEffect } from 'react';
import 'nprogress/nprogress.css';


const ScrollProgress = () => {
    function scrollShow() {
        const scroll = window.scrollY; //scroll from Y
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        let minHeight = Math.round(totalHeight / 9);
        if (Math.trunc(scroll / minHeight)) {
            let x = Math.trunc(scroll / minHeight);
            NProgress.set(0.1 * x);
            if (scroll > minHeight * 9) {
                NProgress.set(0.98);
            }
        }
    }
    useEffect(() => {
        NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false, parent: "#headerContainer" });
        NProgress.set(0.0);
        window.addEventListener("scroll", scrollShow);
        // window.addEventListener("scrollY")
        return () => {
            window.removeEventListener("scroll", scrollShow);

        };
    }, [])
    return null;
};

export default ScrollProgress;
