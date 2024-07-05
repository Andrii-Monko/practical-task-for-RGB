import './Gift&Mentor.scss';

export const GiftAndMentor = () => (
    <div className='mentor__container'>
        <div className='main__mentor-box'>
            <img
                src="/img/man.png"
                alt="mentor-photo"
                className='main__mentor-photo'
            />

            <div className='main__mentor-info'>
                <p className='main__mentor-name'>
                    Кирилл <p className='main__mentor-surname'>КАСАТОНОВ</p>
                </p>

                <p className='main__mentor-text'>
                    6 лет коммерческого опыта с такими  компаниями как Mercedes-Benz и другими крупными корпорациями
                </p>
            </div>
        </div>

        <div className='main__mentor-box'>
            <img
                src="/img/gift.png"
                alt="mentor-photo"
                className='main__mentor-photo'
            />

            <div className='main__mentor-info'>
                <p className='main__mentor-name'>
                    Бонус за регистрацию
                </p>

                <p className='main__mentor-text'>
                    PDF-файл "5 преимуществ профессии фронтенд разработчика"
                </p>
            </div>
        </div>
    </div>
)