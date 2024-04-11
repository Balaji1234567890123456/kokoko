// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
const TeamCard = props => {
  const {joi} = props
  const {teamImageUrl, name, id} = joi
  return (
    <Link to={`/ipl/${id}`}>
      <div className="bol">
        <img src={teamImageUrl} className="olo" />
        <h1>{name}</h1>
      </div>
    </Link>
  )
}
export default TeamCard
