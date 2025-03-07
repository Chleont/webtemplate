import React, { useState, useEffect, useContext } from 'react';
import { Sidebar } from './sidebar';
import { Bars3Icon, XMarkIcon, } from "@heroicons/react/24/outline";
import { render } from '/src/context';

function Layout({ children }) {
    const mobileContext = useContext(render);
    // const mobile = useRef(mobileContext.isMobile);
    const [mobile, setMobile] = useState(mobileContext.isMobile);
    const headerHeight = useContext(render).headerHeight;
    const [navbarWidth, setNavbarWidth] = useState(mobileContext.isMobile ? window.innerWidth : window.innerWidth * 0.15);
    const [menu, setMenu] = useState(false);

    function handleResize() {
        if (window.innerWidth <= 1080) {
            mobileContext.setMobile(true);
            setMobile(true);
        } else if (window.innerWidth > 1080) {
            mobileContext.setMobile(false);
            setMobile(false);
        }
    }

    useEffect(() => {
        setMenu(false);
        if (!mobile) {
            setNavbarWidth(window.innerWidth * 0.15);
        } else {
            setNavbarWidth(0);
        }
    }, [mobile]);

    useEffect(() => {
        if (mobile) {
            if (menu) {
                setNavbarWidth(document.getElementsByTagName('main')[0].offsetWidth);
            } else {
                setNavbarWidth(0);
            }
        }
    }, [menu]);

    useEffect(() => {
        console.log(mobile);
        window.addEventListener("resize", handleResize);
        return (() => {
            window.removeEventListener('resize', handleResize);
        });
    }, []);

    return (
        <div className="h-screen w-full overflow-y-auto flex flex-col items-start justify-start">
            {/* Header */}
            {mobile && <div id='mobile-navbar' style={{ minHeight: headerHeight + 'px', }} className='bg-red-200 mb-auto w-full px-4 flex flex-row items-center'>
                {!menu ?
                    <Bars3Icon className="ml-auto h-8 w-8 stroke-2 cursor-pointer" onClick={() => { setMenu(true); }} /> :
                    <XMarkIcon className="ml-auto h-8 w-8 stroke-2 cursor-pointer" onClick={() => { setMenu(false); }} />
                }
            </div>
            }
            {/* Sidebar */}
            {/* {!mobile && */}
            <div style={{ width: navbarWidth + 'px', top: mobile ? headerHeight + 'px' : '0px' }} className='h-full fixed bg-white left-0 z-10 pt-[10vh] flex flex-col justify-center'>
                <Sidebar closeMenu={() => { if (mobile) { setMenu(false); } }} />
            </div>
            {/* } */}
            {/* Main page */}
            <main style={{ padding: !mobile ? '0  ' + navbarWidth + 'px' : '0px', minHeight: mobile ? window.innerHeight - headerHeight + 'px' : window.innerHeight + 'px' }} className={`w-full h-fit flex flex-col items-center justify-start mb-auto`}>
                {children}
            </main>
            {/* Footer */}
            <footer style={{ minHeight: headerHeight + 'px' }} className="fixed bottom-0 left-0 w-full flex flex-row items-center justify-center px-4">
                <p>&copy; {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}

export default Layout;
