import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { browserGameData } from "../utilities/data";

import Game from "./Game";

type ArrowType = {
  className?: string,
  onClick?: React.MouseEventHandler<HTMLImageElement>,
} 

const Games = () => {
  const CarouselArrow = (props: ArrowType) => {
    const className = props.className || "";
    return (
      <img 
        className={`${className} carousel-arrow`}
        onClick={props.onClick}
        src="images/carousel-arrow.png"
      />
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    nextArrow: <CarouselArrow />,
    prevArrow: <CarouselArrow />,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1
        }
      }
    ],
    slidesToScroll: 1,
    slidesToShow: 3
  };

  return (
    <section className="games-section">
      <h1 className="games-title">Games</h1>
      <p className="games-subtitle">Here are some small browser games I had fun working on, all written in HTML CSS/SCSS and vanilla JS.</p>
      <div className="games-container">
        <Slider {...settings}>
          {browserGameData.map((game, i) => {
            return <Game game={game} key={i} />
          })}
      </Slider>
      </div>
    </section>
  )
}

export default Games;
