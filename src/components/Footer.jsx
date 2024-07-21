import React from 'react'
import logo from '../assets/icons/logo.png'
import instaIcon from '../assets/icons/instagram.png'
import whatsAppIcon from '../assets/icons/whatsapp.png'
import classes from './Footer.module.css'


const Footer = () => {
  return (
    <footer className={classes.footer}>
        <section>
            <div className={classes.logoBox}>
                <img src={logo} alt="logo" />
                <h3>TANDA</h3>
            </div>
            <div>
                <img src={instaIcon} alt="instagram" />
                <img src={whatsAppIcon} alt="whatsApp" />
            </div>
        </section>
        <nav>
            <h4>Компания</h4>
            <ul>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Способы оплаты</a></li>
                <li><a href="#">Доставка</a></li>
                <li><a href="#">Политика конфиденциальности</a></li>
                <li><a href="#">Персональные данные</a></li>
            </ul>
        </nav>
        <nav>
            <ul>
                <h4>Партнерам</h4>
                <li><a href="#">Продавайте на UNO</a></li>
                <li><a href="#">Курьерам</a></li>
            </ul>
        </nav>
        <div>
            <h4>Контакты</h4>
            <ul>
                <li><a href="#">unokg@gmail.com</a></li>
                <li><a href="#">+996 700 000 000</a></li>
                <li><a href="#">+996 500 000 000</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer