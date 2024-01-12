// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickedEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onEmojiClick = () => {
    clickedEmoji(id)
  }

  return (
    <li>
      <button className="emoji-card" onClick={onEmojiClick}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
