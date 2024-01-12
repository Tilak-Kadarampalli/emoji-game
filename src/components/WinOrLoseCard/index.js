// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, restartGame} = props
  let result = ''
  let scoreImgUrl = ''
  let scoreDisplay = score
  const onRestart = () => {
    restartGame(scoreDisplay)
  }

  if (score === 11) {
    result = 'Won'
    scoreDisplay = score + 1
    scoreImgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    result = 'Lose'
    scoreImgUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }

  return (
    <div className="score-card">
      <div className="score-details">
        <h1>You {result}</h1>
        <p>Score</p>
        <p>{scoreDisplay}/12</p>
        <button onClick={onRestart} type="button" className="play-again-btn">
          Play Again
        </button>
      </div>
      <div className="score-img-cont">
        <img src={scoreImgUrl} alt="winorlose" className="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
