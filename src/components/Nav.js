import React from "react"
import {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import '../stylesheets/Nav.css';

function Nav() {
    const subMenu = useRef(null);

    function toggleMenu() {
        subMenu.current.classList.toggle("hidden");
    }
    
    function checkWindow() {
        if(window.innerWidth > 639 && subMenu.current !== null){
            if(!subMenu.current.classList.contains("hidden")){
                toggleMenu();
            }
        }
    }
    useEffect(() => {
        window.addEventListener("resize", checkWindow);
        return () => {
            window.removeEventListener("resize", checkWindow);
        };
    }, []);


    checkWindow();

    return (
    <nav className="mb-8 sm:mb-10 bg-zinc-900">
        <div className="px-6 py-4 sm:px-0 sm:py-4 flex justify-between items-center align-center sm:m-auto sm:w-5/6">
            <Link to="/about/" className="text-xl font-bold">
                <img className="w-12" src={logo}/>
            </Link>
            <div className="flex items-center sm:order-3">
                <Link to="/about/Contact" className="mr-6 px-6 py-2 text-lg font-semibold bg-emerald-500 text-white rounded-xl hover:bg-emerald-700">Contact</Link>
                <div className="sm:hidden">
                    <button className="outline-none" onClick={toggleMenu}>
                    <svg className="w-6 h-6 text-gray-500"
                        x-show="! showMenu"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 00 24 24"
                        stroke="currentColor">
                        <path d="m4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    </button>
                </div>
            </div>
            <div className="hidden sm:flex space-x-6 flex-row flex justify-center items-center sm:order-2">
                <div className="space-x-6">
                    <Link to="/about/" className="text-lg font-semibold hover:text-gray-500">About</Link>
                    <Link to="/about/my_work" className="text-lg font-semibold hover:text-gray-500">Work</Link>
                    <Link to="/about/my_skills" className="text-lg font-semibold hover:text-gray-500">Skills</Link>
                </div>
                
            </div>
        </div>
        <div className="hidden sm:hidden space-x-12 pt-6 pb-6 bg-zinc-950" ref={subMenu}>
            <Link to="/about/" className="text-lg font-semibold hover:text-gray-500" onClick={toggleMenu}>About</Link>
            <Link to="/about/my_work" className="text-lg font-semibold hover:text-gray-500" onClick={toggleMenu}>Work</Link>
            <Link to="/about/my_skills" className="text-lg font-semibold hover:text-gray-500" onClick={toggleMenu}>Skills</Link>
        </div>
    </nav>
   
    );
}

export default Nav;