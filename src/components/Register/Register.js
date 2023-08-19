import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import "./Register.css";

function Register() {
    return (
        <section className='register'>
      <Link to="/" className="register__logo">
        <img src={logo} alt="логотип" />
      </Link>            

            <h3 className='register__hi'>Добро пожаловать!</h3>

            <form className="register__form" 
            // onSubmit={handleSubmit}
            >
                <span className='register__form-top-span'>Имя</span>
                <input
                    id="sing-up-name-input"
                    type="string"
                    required
                    name="name"
                    // value={inputs.email}
                    // onChange={handeleChange}
                    placeholder="Имя"
                    className="register__input-name"
                />
                <span className='register__form-top-span'>E-mail</span>    
                <input
                    id="sing-up-email-input"
                    type="email"
                    required
                    name="email"
                    // value={inputs.email}
                    // onChange={handeleChange}
                    placeholder="Email"
                    className="register__input-email"
                />
                <span className='register__form-top-span'>Пароль</span>    
                <input
                    id="sing-up-password-input"
                    type="password"
                    required
                    // value={inputs.password}
                    // onChange={handeleChange}
                    name="password"
                    placeholder="Пароль"
                    className="register__input-pass"
                />
                <span className='register__form-error-span'>Что-то пошло не так...</span>

                <button className="register-btn" type="submit">                
                    Зарегистрироваться
                </button>

            </form>

            <div className='register-down'>
                <p className='register-down__left'>Уже зарегистрированы?</p>                
                <Link to="/signin" className="register-down__rigth">Войти</Link>
            </div>

        </section>
    )
}

export default Register;