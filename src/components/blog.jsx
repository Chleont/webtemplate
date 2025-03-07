import React, { useEffect, useContext } from "react";
import { render } from '/src/context';
import { Home, Sec } from './mainElements';

//name should change regarding the locale, path is used only for navigation
export const blogElements = [
    {
        name: 'home',
        path: 'home',
        element: <Home key={'home'} />
    },
    {
        name: 'sec',
        path: 'sec',
        element: <Sec key={'sec'} />
    }
];

export function Blog() {
    const mobileContext = useContext(render);

    useEffect(() => {

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6, // 60% of the section must be visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const url = new URL(window.location);
                    url.searchParams.set("section", sectionId);
                    window.history.replaceState({}, "", url);
                }
            });
        }, observerOptions);

        blogElements.forEach((element) => {
            const block = document.getElementById(element.name);
            if (block) observer.observe(block);
        });

        // Scroll to section on page load if URL has a section parameter
        const urlParams = new URLSearchParams(window.location.search);
        const sectionFromUrl = urlParams.get("section");
        if (sectionFromUrl) {
            const targetElement = mobileContext.isMobile && sectionFromUrl == 'home' ? document.getElementById('mobile-navbar') : document.getElementById(sectionFromUrl);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className='w-full h-fit flex flex-col items-center justify-start'>
            {blogElements.map(each => each.element)}
        </div>
    );
}