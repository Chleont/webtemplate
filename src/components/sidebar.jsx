import React, { useContext } from "react";
import { Card } from "@material-tailwind/react";
import { blogElements } from "./blog";
import { render } from '/src/context';

export function Sidebar(props) {
    const mobileContext = useContext(render);
    function goTo(path) {
        const targetElement = (path == 'home' && mobileContext.isMobile) ? document.getElementById('mobile-navbar') : document.getElementById(path);
        console.log(path);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            props.closeMenu();
        }
    }
    return (
        <Card className="w-full h-fit shadow-none mb-auto rounded-none overflow-hidden">
            <div className="w-full p-2">
                {blogElements.map(each =>
                    <div key={each.path} className="w-full px-2 cursor-pointer my-3" onClick={() => { goTo(each.path); }}>{each.name}</div>
                )}
            </div>
        </Card>
    );
}