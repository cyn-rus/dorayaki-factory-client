import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Create, Recipes, Materials, Login, Register, Request } from './pages'

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
      </Switch>
    </Router>
  )
}

export default App;
