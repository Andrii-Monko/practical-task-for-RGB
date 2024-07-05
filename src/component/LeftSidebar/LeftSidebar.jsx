import { BsGlobe } from "react-icons/bs";
import './LeftSidebar.scss';

export const LeftSidebar = () => {

    return (
        <div className='main__left-sidebar'>
            <div className='main__box'>
                <BsGlobe className='main__icon' />
                <p className="main__icon-text">
                    Вебинар
                </p>
            </div>

            <div className='main__title'>
                front-end
            </div>

            <div className='main__start-box'>
                <img
                    src="/img/zero.png"
                    alt="з нуля"
                    className='main__photo'
                />

                <p className='main__text'>
                    легкий старт в IT профессии
                </p>
            </div>

            <div className='main__describe'>
                Узнайте какими навыками должен обладать фронтенд разработчик в 2022 году и как начать карьеру в востребованной профессии
            </div>
        </div>
    )
}