import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home'
import './App.css'
import { Reset } from 'styled-reset'

function App() {
  return (
    <Router>
      <Reset />
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/movie/:id"}>
          <Detail />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/"}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;