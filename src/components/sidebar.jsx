import { Card } from "@material-tailwind/react";
import { blogElements } from "./blog";

export function Sidebar() {
    function goTo(path) {
        const targetElement = document.getElementById(path);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
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