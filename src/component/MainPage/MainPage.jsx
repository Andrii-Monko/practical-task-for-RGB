import './MainPage.scss';
import { Header } from '../Header/Header';
import { LeftSidebar } from '../LeftSidebar/LeftSidebar';
import { InputField } from '../InputField/InputField';
import { Footer } from '../Footer/Footer';
import { GiftAndMentor } from '../Gift&Mentor/Gift&Mentor';


export const MainPage = () => {

    return (
        <div className="main">
            <Header />
            <div className='main__container'>
                <div>
                    <LeftSidebar />
                    <div className="GiftAndMentor">
                        <GiftAndMentor />
                    </div>
                </div>
                <InputField />
            </div>

            <div className="GiftAndMentor-second">
                <GiftAndMentor />
            </div>

            <div className='icons__container'>
                <img
                    src="/img/html.png"
                    alt="html"
                    className='html-icon'
                />
                <div className='html-spot'></div>

                <img
                    src="/img/css.png"
                    alt="css"
                    className='css-icon'
                />
                <div className='css-spot'></div>

                <img
                    src="/img/js.png"
                    alt="js"
                    className='js-icon'
                />
                <div className='js-spot'></div>

                <img
                    src="/img/sub.png"
                    alt="sub"
                    className='sub-icon'
                />
                <div className='sub-spot'></div>

                <img
                    src="/img/vs.png"
                    alt="vs"
                    className='vs-icon'
                />
                <div className='vs-spot'></div>
            </div>

            <Footer />
        </div>
    )
}