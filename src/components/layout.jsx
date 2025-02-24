import React from 'react';
import { Sidebar } from './sidebar';
function Layout({ children }) {

    const mobile = window.screen.width < 800;
    const navbarWidth = window.screen.width * 0.15;
    console.log(mobile);
    return (
        <div className="h-screen w-screen flex flex-col items-start justify-start">
            <sidebar style={{ width: navbarWidth + 'px' }} className='absolute left-0 top-0 z-10 h-screen pt-[10vh] flex flex-col justify-center'>
                <Sidebar />
            </sidebar>
            <main style={{ padding: '0  ' + navbarWidth + 'px' }} className={`w-screen h-full flex flex-col items-center justify-center mb-auto`}>
                {children}
            </main>
            <footer className="mt-auto w-full flex flex-row items-center justify-center h-12 px-4">
                <p>&copy; {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}

export default Layout;
