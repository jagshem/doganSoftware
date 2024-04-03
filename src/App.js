import React, { useEffect, useState } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { FaInstagram, FaTelegramPlane, FaDiscord } from 'react-icons/fa';
import "./App.css";

function App() {
  const [targetTime, setTargetTime] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/api/start-time')
      .then(response => response.json())
      .then(data => {
        const targetDate = new Date(data.startTime);
        targetDate.setDate(targetDate.getDate() + 90); // 60 gün sonrası
        setTargetTime(targetDate.getTime());
      });
  }, []);

  return (
    <div className="main-container">
      <section className="container">
        <div className="clock_content">
          <h1>Yakın Zamanda Buradayız</h1>
          <h3>Bulut Web Muhasebe ihtiyaçlarınızın hepsi tek bir noktada. <br /> Gelişmelerden haberdar olmak için takip et!</h3>
          <FlipClockCountdown
            className='flip-clock'
            to={targetTime}
            labels={["GÜN", "SAAT", "DAKİKA", "SANİYE"]}
            duration={0.5}
          />
          <a href="https://www.neslicesoft.com.tr/" target="_blank" rel="noopener noreferrer"><button className="button" >
              Bize Ulaşın</button></a>
          
          <div className="social-icons">
            <a href="https://www.instagram.com/t.dogannnnn" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://t.me/melinkof" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane />
            </a>
            <a href="https://discord.gg/N2HNuzrT" target="_blank" rel="noopener noreferrer">
              <FaDiscord />
            </a>
          </div>
        </div>
      </section>
      <div className="features">
      </div>
    </div>
  );
}

export default App;
