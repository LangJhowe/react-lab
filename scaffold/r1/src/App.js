import { HashRouter, Route, Switch, Link, Redirect, BrowserRouter as Router } from 'react-router-dom'

import Index from './view/index'
import About from './view/about'
import V1 from './view/v1'

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">index</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/v1">v1</Link></li>
      </ul>
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <Index />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
          <Redirect from="/abc" to="/about"></Redirect>

          <Route path="/v1" >
            <V1 />
          </Route>

          {/**
           * 重定向：
           */}
          <Redirect from="/abc" to="/about"></Redirect>

          {/* 放在最后,如果上面的路由都匹配不到时,跳转到“/” */}
          <Redirect from="/*" to="/"></Redirect>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
