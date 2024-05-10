import { BaseProject } from "../types";

const Game = ({ game }: { game: BaseProject }) => {
  return (
    <div className="game-container">
      <img src={game.baseImg} className="game-img" alt={`Screenshot of ${game.title}`} />
      <div className="game-text-container">
      <div className="project-title-container">
          <h3 className="project-title">{game.title}</h3>
          <div className="project-hr"></div>
          <div className="project-technologies">HTML, CSS, JS</div>
          <div className="game-btn-container">
            <button className="project-btn">Github</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game;
