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

// 참고 링크

// https://github.com/hanim3/practice-project/blob/main/movie-app/src/routes/Home.js
// https://hanim3.github.io/movie