var React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory,
    IndexRoute = ReactRouter.IndexRoute

//import components
import Welcome from '../components/Welcome';
import Login from '../components/Login'


module.exports = (
  <Router history={hashHistory}>
    <Route path='/' >
      <IndexRoute component={Welcome}/>
      <Route path='login' component={Login}/>
    </Route>
  </Router>
)
