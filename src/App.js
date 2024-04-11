
import {Route} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import './App.css'

const App = () => (
  <>
    
    <Route exact path="/" component={Home} />
    <Route  path="/ipl/:id" component={TeamMatches} />
  </>
)

export default App
