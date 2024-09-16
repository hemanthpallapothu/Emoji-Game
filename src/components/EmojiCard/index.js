import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onClickedEmojies} = props
  const {id, emojiUrl, emojiName} = eachEmoji

  const clickedEmoji = () => {
    onClickedEmojies(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" onClick={clickedEmoji} className="emoji-btn">
        <img className="emoji-img" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
