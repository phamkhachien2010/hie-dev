import { createBrowserHistory } from 'history';
import { Switch, Router } from 'react-router-dom';
import AboutMe from './pages/about/AboutMe';
import BackEnd from './pages/backEnd/BackEnd';
import FrontEnd from './pages/frontEnd/FrontEnd';
import ReactFrontend from './pages/frontEnd/ReactFrontend';
import HomePage from './pages/Home/HomePage';
import Librery from './pages/Library/Librery';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/home' exact Component={HomePage} />
        <HomeTemplate path='/about' exact Component={AboutMe} />
        
        <HomeTemplate path='/dev/backend' exact Component={BackEnd} />
        <HomeTemplate path='/dev/frontend' exact Component={FrontEnd} />
        <HomeTemplate path='/dev/frontend/react' exact Component={ReactFrontend} />

        <HomeTemplate path='/library' exact Component={Librery} />

        <HomeTemplate path='/' exact Component={HomePage} />
      </Switch>
    </Router>

  );
}

export default App;
