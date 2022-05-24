import { createBrowserHistory } from 'history';
import { Switch, Router } from 'react-router-dom';
import AboutMe from './pages/about/AboutMe';
import InfoTakeBack from './pages/admin/InfoTakeBack';
import LibraryManager from './pages/admin/LibraryManager';
import UserManagerTodoList from './pages/admin/UserManagerTodoList';
import BackEnd from './pages/backEnd/BackEnd';
import FrontEnd from './pages/frontEnd/FrontEnd';
import ReactFolder from './pages/frontEnd/ReactFolder';
import ReactFrontend from './pages/frontEnd/ReactFrontend';
import GitBasic from './pages/git/GitBasic';
import HomePage from './pages/Home/HomePage';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
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
        <HomeTemplate path='/tech/reactjs' exact Component={ReactFrontend} />
        <HomeTemplate path='/other/cau-hinh-folder-react' exact Component={ReactFolder} />

        <HomeTemplate path='/tech/github' exact Component={GitBasic} />

        <AdminTemplate path='/admin/user-manager-todolist' exact Component={UserManagerTodoList} />
        <AdminTemplate path='/admin/library-manager' exact Component={LibraryManager} />
        <AdminTemplate path='/admin/info-takeback-manager' exact Component={InfoTakeBack} />

        <HomeTemplate path='/' exact Component={HomePage} />
      </Switch>
    </Router>

  );
}

export default App;
