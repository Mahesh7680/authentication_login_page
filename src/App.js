import {Switch, Route} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <ProtectedRoute exact path="/login" component={Login} />

    <NotFound />
  </Switch>
)

export default App
