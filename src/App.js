import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import EmployeeSpecialTab from './components/EmployeeSpecialTab'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />

      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute
        path="/employee-special-tab"
        component={EmployeeSpecialTab}
      />
      {/* <ProtectedRoute exact path="/login" component={LoginForm} /> */}

      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
