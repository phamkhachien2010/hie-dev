import { createBrowserHistory } from 'history';
import { Switch, Router } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/' exact Component={HomePage} />
      </Switch>
    </Router>

  );
}

export default App;
