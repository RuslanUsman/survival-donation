import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faGoogleWallet } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const donationCards = [
    {
      id: 1,
      image: '/images/official-donation.jpg',
      title: 'Официальный донат',
      link: 'https://store.herogame.com/lios',
      icon: faCreditCard, // Иконка кредитной карты для официального доната
    },
    {
      id: 2,
      image: '/images/playerok-donation.jpg',
      title: 'Донат через Playerok',
      link: 'https://playerok.com/apps/last-island-of-survival/coupons',
      icon: faGoogleWallet, // Иконка Google Wallet для Playerok доната
    },
  ];

  return (
    <div className="container">
      <header>
        <h1>Донат Last Island of Survival</h1>
      </header>
      <main className="cards-container">
        {donationCards.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="donate-button"
            >
              <FontAwesomeIcon icon={card.icon} /> Перейти
            </a>
          </div>
        ))}
      </main>
      <footer>
        <p>Эпоха выживания</p>
        <a
          href="https://web.telegram.org/a/#-1002050285269"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTelegram} className="telegram-icon" />
        </a>
      </footer>
    </div>
  );
};

export default App;
