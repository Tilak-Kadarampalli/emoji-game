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

class EmojiGame extends Component {
  state = {clickedEmojis: [], score: 0, topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickedEmoji = id => {
    const {clickedEmojis} = this.state
    this.setState(prevState => ({
      clickedEmojis: [...prevState.clickedEmojis, id],
      score: clickedEmojis.length + 1,
    }))
  }

  render() {
    const {emojisList} = this.props
    const shuffledList = this.shuffledEmojisList()
    const {clickedEmojis, score} = this.state

    return (
      <div className="main-bg">
        <NavBar score={score} />
        <div className="emojis-div">
          {shuffledList.map(eachEmoji => (
            <EmojiCard
              emojiDetails={eachEmoji}
              clickedEmoji={this.clickedEmoji}
              key={eachEmoji.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default EmojiGame
