import data from '../data/ArticleCardImageData';
import {useState, useEffect} from 'react';

export default function HeroGrid() {

  const [randomLocation, setRandomLocation] = useState([]);

  const getRandomLocation =() => {
    const random = Math.floor(Math.random() * data.length);
    setRandomLocation(data[random]);
    console.log('Location:', data[random]);
  }

  useEffect(() => {
    setRandomLocation(getRandomLocation());
  }, [])


  return(
    <main className="hero-grid-main">
      <div className="hero-grid-parent">
        {data.map(game => (
          <div className="hero-grid-li" key={game.id}>
            <div className="hero-grid-img-con">
              <img src={game.img} alt={game.title} className='hero-grid-img' />
            </div>

            <div className="hero-grid-title">{game.title}</div>
          </div>
        ))}
  
      </div>
    </main>
  );
}