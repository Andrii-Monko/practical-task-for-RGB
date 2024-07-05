import './Icons.scss';

export const Icons = () => {

    return (
        <div className='icons'>
            <div className='icons__container'>
                <div className='icon__box css-box'>
                    <img
                        src="/img/css.png"
                        alt="html"
                        className="icons__photo css"
                    />

                    <div className='css__circle'>
                    </div>
                </div>

                <div className='icon__box'>
                    <img
                        src="/img/sub.png"
                        alt="html"
                        className="icons__photo sub"
                    />
                    <div className='sub__circle'>
                    </div>
                </div>
            </div>

            <div className='icons__container'>
                <div className='icon__box html-box'>
                    <img
                        src="/img/html.png"
                        alt="html"
                        className="icons__photo html"
                    />

                    <div className='html__circle'>
                    </div>
                </div>

                <div className='icon__box'>
                    <img
                        src="/img/js.png"
                        alt="html"
                        className="icons__photo js"
                    />
                    <div className='js__circle'>
                    </div>
                </div>

                <div className='icon__box'>
                    <img
                        src="/img/vs.png"
                        alt="html"
                        className="icons__photo vs"
                    />
                    <div className='vs__circle'>
                    </div>
                </div>
            </div>
        </div>

    )
}