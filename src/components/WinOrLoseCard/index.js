import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, resetGame} = props
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scorelabel = isWon ? 'Best Score' : 'Score'

  const onClickResetGame = () => {
    resetGame()
  }

  return (
    <div className="score-card-bg-container">
      <div>
        <h1 className="text">{gameStatus}</h1>
        <h1 className="wishes-text">{scorelabel}</h1>
        <h1 className="score">{score}/12</h1>
        <button onClick={onClickResetGame} className="button" type="button">
          Play Again
        </button>
      </div>
      <img alt="won or lose" src={imageUrl} />
    </div>
  )
}

export default WinOrLoseCard
