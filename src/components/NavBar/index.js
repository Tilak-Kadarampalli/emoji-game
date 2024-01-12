// Write your code here.
import './index.css'

const Navbar = props => {
  const {score, topScore} = props
  return (
    <div className="nav-bg">
      <div className="nav-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="nav-img"
        />
        <h1 className="nav-head">Emoji Game</h1>
      </div>
      <div className="nav-score">
        <p> Score: {score} </p>
        <br />
        <p> Top Score: {topScore} </p>
      </div>
    </div>
  )
}

export default Navbar
