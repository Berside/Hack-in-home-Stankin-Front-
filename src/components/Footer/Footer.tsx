import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerColumns">
          <div className="column">
            <ul>
              <li>РАДИАЦИОННАЯ ОБСТАНОВКА</li>
              <li>ПРОТИВОДЕЙСТВИЕ КОРРУПЦИИ</li>
              <li>ЗАКУПКИ</li>
              <li>ГОДОВЫЕ ОТЧЕТЫ</li>
              <li>ГОСУСЛУГИ</li>
              <li>ГОСФУНКЦИИ</li>
              <li>ВАКАНСИИ</li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li>УСТОЙЧИВОЕ РАЗВИТИЕ</li>
              <li>ДЕЙСТВУЮЩИЕ АЭС РОССИИ</li>
              <li>ЦИФРОВЫЕ ПРОДУКТЫ</li>
              <li>ВОЛОНТЕРСТВО В «РОСАТОМЕ»</li>
              <li>СОКРАЩЕНИЯ</li>
              <li>СТАЖИРОВКИ</li>
              <li>ТЕХНИЧЕСКОЕ РЕГУЛИРОВАНИЕ</li>
            </ul>
          </div>
        </div>
        <div className="followUs">
          <p>Следите за нами:</p>
          <div className="subscription">
            <input
              type="email"
              placeholder="Подписаться на обновления"
              className="subscriptionInput"
            />
            <button className="subscriptionButton">➔</button>
          </div>
          <div className="socialIcons">
            <img src="/vkpng.png" alt="VK" />
            <img src="/ok-icon.png" alt="Одноклассники" />
            <img src="/telegram-icon.png" alt="Telegram" />
            <img src="/rutube-icon.png" alt="Rutube" />
            <img src="/rosatom-icon.png" alt="Росатом" />
            <img src="/rss-icon.png" alt="RSS" />
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          © 2008–2024. Все права защищены.{" "}
          <a href="#" className="link">
            Государственная корпорация по атомной энергии «Росатом»
          </a>
          . При использовании материалов ссылка на сайт{" "}
          <a href="https://www.rosatom.ru" className="link">
            www.rosatom.ru
          </a>{" "}
          обязательна
        </p>
        <div className="footerLinks">
          <a href="#" className="link">
            Сообщить о коррупции: 800-100-0707
          </a>
          <a href="#" className="link">
            Контакты
          </a>
          <a href="#" className="link">
            Написать в «Росатом»
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
