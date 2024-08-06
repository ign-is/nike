import { useState } from "react";
import {hamburger } from "../assets/icons";
import { close } from "../assets/images"
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img 
                        src={headerLogo} 
                        alt="Logo"
                        width={129}
                        height={29}

                    />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a 
                                href={item.href}
                                className="font-montserrat leading-normal text-lg text-slate-gray"
                            >
                                    {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="lg:hidden z-30">
                    <button onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ?
                             <img 
                                 src={close} 
                                alt="Hamburger"
                                width={25}
                                height={25} 
                            /> :
                            <img 
                                src={hamburger} 
                                alt="Hamburger"
                                width={25}
                                height={25} 
                            /> 
                        }
                    </button>
                </div>

                {isMobileMenuOpen && (
                <div className="w-60 h-screen pt-24 bg-white lg:hidden absolute top-0 right-0 z-20 flex-1 flex flex-col shadow-2xl">
                    <ul>
                        {navLinks.map((item) => (
                            <li key={item.label} className="mb-5">
                                <a 
                                    href={item.href}
                                    className="p-4 pl-8 uppercase tracking-tighter text-xl cursor-pointer transition-all hover:font-bold"
                                >
                                        {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            </nav>
        </header>
    )
}

export default Nav