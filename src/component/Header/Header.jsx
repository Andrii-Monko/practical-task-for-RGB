import './Header.scss';
import { FaRegCalendar } from "react-icons/fa6";
import { LuClock3 } from "react-icons/lu";

export const Header = () => {

    return (
        <div className='header__container'>
            <img
                src="/img/logo.png"
                alt="logo"
                className='header__logo'
            />

            <div className='header__box'>
                <div className='header__date'>
                    <FaRegCalendar className='header__icon' />
                    28 декабря
                </div>

                <div className='header__date'>
                    <LuClock3 className='header__icon' />
                    3,5 часа
                </div>
            </div>
        </div>
    )
}