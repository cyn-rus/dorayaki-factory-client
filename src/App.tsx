import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Recipes, Materials, Login, Register, Request } from './pages'
import './styles/index.scss'

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Redirect to='/login' />
      </Route>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/recipes' component={Recipes} />
        <Route exact path='/materials' component={Materials} />
        <Route exact path='/request' component={Request} />
      </Switch>
    </Router>
  )
}

export default App;
