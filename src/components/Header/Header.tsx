import Link from 'next/link'
import style from './Header.module.css'

export const Header = () => {

    // const currentDate = new Date();

    const formattedDate = new Date().toLocaleDateString('ru-RU', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });

    return(
        <header className={style.header}>
            <div className={style.header__info}>
                <strong>Главная</strong>
                <span>{formattedDate}</span>
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