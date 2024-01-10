// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  return (
    <button className="emoji-card">
      <img src={emojiUrl} alt={emojiName} />
    </button>
  )
}

export default EmojiCard
