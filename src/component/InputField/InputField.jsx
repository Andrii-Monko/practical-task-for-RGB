import { useState } from 'react';
import './InputField.scss';

export const InputField = () => {
    const [nameField, setNameField] = useState('')
    const [nameFieldError, setNameFieldError] = useState(false)

    const [phoneField, setPhoneField] = useState('')
    const [namePhoneError, setPhoneFieldError] = useState(false)

    const [mailField, setMailField] = useState('')
    const [mailFieldError, setMailFieldError] = useState(false)

    const SentInput = () => {
        if (!nameField) {
            setNameFieldError(true)
            return
        }

        if (!phoneField) {
            setPhoneFieldError(true)
            return
        }

        if (!mailField) {
            setMailFieldError(true)
            return
        }
    }

    return (
        <div className='input__container'>

            <p className='input__title'>
                <div className='input__title-box'>
                    <p className='input__title-text'>
                        Запишитесь
                    </p>
                    <p className='pink'>
                        бесплатно
                    </p>
                </div>
                
                <p className='input__title-text'>
                    и получите подарок
                </p>
            </p>

            <form
                action="https://t.me/rgb_hr"
                method='get'
                className='input__form'
            >
                <input
                    required
                    value={nameField}
                    type="text"
                    placeholder='Ваше имя и фамилия'
                    className='input__field'
                    onChange={(event) => setNameField(event.target.value)}
                />

                <input
                    required
                    value={phoneField}
                    type="tel"
                    placeholder='Ваш номер телефона'
                    className='input__field'
                    onChange={(event) => setPhoneField(event.target.value)}
                />

                <input
                    required
                    value={mailField}
                    type="email"
                    placeholder='Ваш email'
                    className='input__field'
                    onChange={(event) => setMailField(event.target.value)}
                />

                <button
                    className='input__button'
                    onClick={() => {
                        SentInput()
                    }}
                >
                    Записаться бесплатно
                </button>
            </form>

            <p className='input__text'>
                Нажимая на кнопку я согашаюсь <br />
                с политикой конфидециальности
            </p>

        </div>
    )
}