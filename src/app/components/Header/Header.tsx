import Link from 'next/link'
import style from './Header.module.css'

export const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.header__info}>
                <strong>Главная</strong>
                <span>12 декабря, 2022 </span>
            </div>
            <div className={style.control}>
                <Link href='/' className={style.control__item + ' ' + style.chats}>
                    <img src="/icons/notification-bing.svg" alt="notification" />
                </Link>
                <Link href='/' className={style.control__item + ' ' + style.notifi}>
                    <img src="/icons/messages.svg" alt="messages" />
                </Link>
                <Link href='/' className={style.control__item + ' ' + style.avatar}>
                    <img src="/icons/Avatar.png" alt="ava" />
                </Link>
            </div>
        </header>
    )
}