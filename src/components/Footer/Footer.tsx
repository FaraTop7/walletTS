import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Импорт иконок из пакета react-icons
import './Footer.css'; // Подключаем файл стилей для футера

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-social">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                    <div className="footer-links">
                        <a href="/">Главная</a>
                        <a href="/about">О нас</a>
                        <a href="/contact">Контакты</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
