import { HashRouter, Route, Switch, Link } from 'react-router-dom'

import Index from './view/index'
import About from './view/about'
import V1 from './view/v1'

function App() {
  return (
    <HashRouter>
      <ul>
        <li><Link to="/index">index</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/v1">v1</Link></li>
      </ul>
      <div className="App">
        <Switch>
           <Route path="/about">
            <About />
          </Route>
          <Route path="/index">
            <Index />
          </Route>
          <Route path="/">
            <V1 />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
