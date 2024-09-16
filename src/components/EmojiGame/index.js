import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojiesList: [],
    topScore: 0,
    isGameInProcess: true,
  }

  onRenderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiesList} = this.state
    const isWon = clickedEmojiesList === emojisList.length
    const score = clickedEmojiesList.length
    return (
      <WinOrLoseCard score={score} isWon={isWon} resetGame={this.onResetGame} />
    )
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onResetGame = () => {
    this.setState(prevState => ({
      clickedEmojiesList: [],
      topScore: prevState.topScore,
      isGameInProcess: true,
    }))
  }

  fineshGameAndRenderScoreCard = currentScore => {
    const {topScore} = this.state
    let newScore = topScore
    if (currentScore > newScore) {
      newScore = currentScore
    }
    this.setState({topScore: newScore, isGameInProcess: false})
  }

  onClickedEmojies = id => {
    const {emojisList} = this.props
    const {clickedEmojiesList} = this.state
    const isEmojiPresent = clickedEmojiesList.includes(id)
    const currentScore = clickedEmojiesList.length
    if (isEmojiPresent) {
      this.fineshGameAndRenderScoreCard(currentScore)
    } else {
      if (clickedEmojiesList === emojisList.length - 1) {
        this.fineshGameAndRenderScoreCard(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiesList: [...prevState.clickedEmojiesList, id],
      }))
    }
  }

  onRenderEmojiesList = () => {
    const shiffiledEmojiesList = this.shuffledEmojisList()
    return (
      <div className="emojies-container-alinement">
        <ul className="emojies-container">
          {shiffiledEmojiesList.map(eachItem => (
            <EmojiCard
              key={eachItem.id}
              onClickedEmojies={this.onClickedEmojies}
              eachEmoji={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isGameInProcess, clickedEmojiesList, topScore} = this.state

    return (
      <div className="bg-container">
        <NavBar
          isGameInProcess={isGameInProcess}
          score={clickedEmojiesList.length}
          topScore={topScore}
        />
        <div className="emojies-container-alinement">
          {isGameInProcess
            ? this.onRenderEmojiesList()
            : this.onRenderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
