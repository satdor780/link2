'use client'

import Link from "next/link"
import style from './Sidebar.module.css'
import { HomeIcon } from "../icons/HomeIcon"
import { TeamIcon } from "../icons/TeamIcon"
import { MapIcon } from "../icons/MapIcon"
import { usePathname } from "next/navigation"


export const Sidebar = () => {

    const pathname = usePathname(); 

    const links = [
        {
            icon: HomeIcon,
            text: 'Главная',
            path: '/'
        },
        {
            icon: TeamIcon,
            text: 'Команда',
            path: '/team'
        },
        {
            icon: MapIcon,
            text: 'Локации',
            path: '/map'
        },
    ]

    return(
        <aside className={style.aside}>
            <div className={style.logo}>
                <Link href='/'>
                    <img src="/icons/logo.svg" alt="logo" />
                    <span>link</span>
                </Link>
            </div>
            <nav className={style.nav}>
                <ul className={style.nav__list}>
                    {links.map((link, index) => (
                        <li 
                            className={`${style.nav__item} ${pathname === link.path ? style.active : ''}`} 
                            key={index}>
                            <Link href={link.path}>
                                <link.icon />
                                <span>{link.text}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
        
    
    
}