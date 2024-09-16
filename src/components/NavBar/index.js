import './index.css'

const NavBar = props => {
  const {isGameInProcess, score, topScore} = props

  return (
    <div className="nav-bar-container">
      <div className="nav-bar-logo-title-alinement">
        <img
          className="nav-bar-logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
        />
        <h1 className="nav-bar-title">Emoji Game</h1>
      </div>
      {isGameInProcess && (
        <div className="nav-bar-scores-alinement">
          <p className="nav-bar-score">Score: {score}</p>
          <p className="nav-bar-score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
