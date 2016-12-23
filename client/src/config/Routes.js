var React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory,
    IndexRoute = ReactRouter.IndexRoute

//import components
import MyComponent from '../components/MyComponent';


module.exports = (
  <Router history={hashHistory}>
    <Route path='/' >
      <IndexRoute component={MyComponent}/>
    </Route>
  </Router>
)
