// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'
class Home extends Component {
  state = {matchCards: [], isLoading: true}
  componentDidMount() {
    this.getCards()
  }
  getCards = async () => {
    const a = await fetch('https://apis.ccbp.in/ipl')
    const b = await a.json()
    const c = b.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({matchCards: c, isLoading: false})
  }
  render() {
    const {matchCards, isLoading} = this.state
    return (
      <div className="balu">
        <div className="lol">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="img"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <div>
          {isLoading ? (
            <Loader type="TailSpin" height={50} width={50} color="#000000" />
          ) : (
            <ul>
              {matchCards.map(eachItem => (
                <TeamCard joi={eachItem} key={eachItem.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home
