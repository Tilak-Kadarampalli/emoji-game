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

  render() {
    const {emojisList} = this.props
    return (
      <div className="main-bg">
        <NavBar />
        <div className="emojis-div">
          {emojisList.map(eachEmoji => (
            <EmojiCard emojiDetails={eachEmoji} key={eachEmoji.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default EmojiGame
