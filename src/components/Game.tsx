import ProjectLinks from "./ProjectLinks";

import { BaseProject } from "../types";

const Game = ({ game }: { game: BaseProject }) => {
  return (
    <div className="game-container">
      <img src={game.baseImg} className="game-img" alt={`Screenshot of ${game.title}`} />
      <div className="game-text-container">
      <ProjectLinks project={game} projectType="game" />
      </div>
    </div>
  )
}

export default Game;
