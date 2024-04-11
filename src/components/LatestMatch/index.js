// Write your code here
import './index.css'
const LatestMatch = props => {
  const {oop} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    venue,
    date,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = oop
  return (
    <div>
      <div>
        <h1>{competingTeam}</h1>
        <h1>{date}</h1>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img src={competingTeamLogo} className="ooo" />
      </div>
      <div>
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
