// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
class TeamMatches extends Component {
  state = {blogs: [], isLoading: true}
  componentDidMount() {
    this.getFullDetails()
  }
  getBalu = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })
  getFullDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const d = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const e = await d.json()
    const f = {
      teamBanner: e.team_banner_url,
      latestMatchDetails: this.getBalu(e.latest_match_details),
      recentMatches: e.recent_matches.map(eachItem => this.getBalu(eachItem)),
    }
    this.setState({blogs: f, isLoading: false})
  }
  render() {
    const {blogs, isLoading} = this.state
    const {teamBanner, latestMatchDetails, recentMatches} = blogs
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" height={50} width={50} color="#000000" />
        ) : (
          <div className="poll">
            <img src={teamBanner} className="teamBanner" />
            <p>Latest Match</p>
            <div>
              <LatestMatch oop={latestMatchDetails} />
              <ul>
                {recentMatches.map(eachItem => (
                  <MatchCard oops={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
