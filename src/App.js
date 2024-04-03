import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { FaInstagram, FaTelegramPlane, FaDiscord } from 'react-icons/fa';
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <section className="container">
        <div className="clock_content">
          <h1>Yakın Zamanda Buradayız</h1>
          <h3>Bulut Web Muhasebe ihtiyaçlarınızın hepsi tek bir noktada. <br/> Gelişmelerden haberdar olmak için takip et!</h3>
          <FlipClockCountdown
            className='flip-clock'
            to={new Date().getTime() + 60 * 24 * 3600 * 1000}
            labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
            duration={0.5}
          />
          <button className="button">Notify Me</button>
          <div className="social-icons">
          <a href="https://www.instagram.com/t.dogannnnn" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://t.me/melinkof" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane />
          </a>
          <a href="https://discord.com  " target="_blank" rel="noopener noreferrer">
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
