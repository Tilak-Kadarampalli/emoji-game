/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {clickedEmojis: [], score: 0, topScore: 0, resultCard: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickedEmoji = id => {
    const {clickedEmojis} = this.state

    if (clickedEmojis.includes(id) || clickedEmojis.length === 12) {
      this.setState({resultCard: true})
    } else {
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  gameRendering = () => {
    const {resultCard, clickedEmojis} = this.state

    if (resultCard === false) {
      const shuffledList = this.shuffledEmojisList()
      return (
        <ul className="emojis-div">
          {shuffledList.map(eachEmoji => (
            <EmojiCard
              emojiDetails={eachEmoji}
              clickedEmoji={this.clickedEmoji}
              key={eachEmoji.id}
            />
          ))}
        </ul>
      )
    }
    return (
      <WinOrLoseCard
        score={clickedEmojis.length}
        restartGame={this.restartGame}
      />
    )
  }

  restartGame = score => {
    const {topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    }

    this.setState({clickedEmojis: [], resultCard: false})
  }

  render() {
    const {emojisList} = this.props

    const {clickedEmojis, topScore, resultCard} = this.state

    return (
      <div className="main-bg">
        <NavBar score={clickedEmojis.length} topScore={topScore} />
        <div className="main-cont">{this.gameRendering()}</div>
      </div>
    )
  }
}

export default EmojiGame
