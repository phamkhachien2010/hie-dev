import { createBrowserHistory } from 'history';
import { Switch, Router } from 'react-router-dom';
import LoadingComponent from './component/loading/LoadingComponent';
import AboutMe from './pages/about/AboutMe';
import InfoTakeBack from './pages/admin/InfoTakeBack';
import LibraryManager from './pages/admin/LibraryManager';
import TerminalClauseManager from './pages/admin/TerminalClauseManager';
import UserManagerTodoList from './pages/admin/UserManagerTodoList';
import Todolist from './pages/app/todolist/Todolist';
import TodoListManager from './pages/app/todolist/TodoListManager';
import BackEnd from './pages/backEnd/BackEnd';
import MySql from './pages/backEnd/MySql';
import NodeJs from './pages/backEnd/NodeJs';
import FrontEnd from './pages/frontEnd/FrontEnd';
import ReactFrontend from './pages/frontEnd/ReactFrontend';
import GitBasic from './pages/git/GitBasic';
import HomePage from './pages/Home/HomePage';
import Login from './pages/loginSignup/Login';
import Register from './pages/loginSignup/Register';
import Library from './pages/others/Library';
import NodejsFolder from './pages/others/NodejsFolder';
import ReactFolder from './pages/others/ReactFolder';
import TerminalInUse from './pages/others/TerminalInUse';
import NenNhat from './pages/stock/NenNhat';
import Stock from './pages/stock/Stock';
import Profile from './pages/user/Profile';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import AdminPageDefault from './templates/AdminTemplate/defaultAdminTemplate/AdminPageDefault';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import UserTemplate from './templates/userTemplate/UserTemplate';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <LoadingComponent />
      <Switch>
        <HomeTemplate path='/home' exact Component={HomePage} />
        <HomeTemplate path='/about' exact Component={AboutMe} />

        <HomeTemplate path='/dev/backend' exact Component={BackEnd} />
        <HomeTemplate path='/dev/frontend' exact Component={FrontEnd} />

        <HomeTemplate path='/tech/reactjs' exact Component={ReactFrontend} />
        <HomeTemplate path='/tech/nodejs' exact Component={NodeJs} />
        <HomeTemplate path='/tech/mysql' exact Component={MySql} />
        <HomeTemplate path='/tech/github' exact Component={GitBasic} />

        <HomeTemplate path='/app/todolist' exact Component={Todolist} />
        <HomeTemplate path='/app/todolist-manager' exact Component={TodoListManager} />

        <HomeTemplate path='/other/cau-hinh-folder-react' exact Component={ReactFolder} />
        <HomeTemplate path='/other/library' exact Component={Library} />
        <HomeTemplate path='/other/lenh-thuong-dung' exact Component={TerminalInUse} />
        <HomeTemplate path='/other/cau-hinh-folder-nodejs' exact Component={NodejsFolder} />

        <HomeTemplate path='/stock' exact Component={Stock} />
        <HomeTemplate path='/stock/nen-nhat' exact Component={NenNhat} />

        <UserTemplate path='/login' exact Component={Login} />
        <UserTemplate path='/register' exact Component={Register} />
        <UserTemplate path='/profile' exact Component={Profile} />

        <AdminTemplate path='/admin/user-manager-todolist' exact Component={UserManagerTodoList} />
        <AdminTemplate path='/admin/library-manager' exact Component={LibraryManager} />
        <AdminTemplate path='/admin/info-takeback-manager' exact Component={InfoTakeBack} />
        <AdminTemplate path='/admin/terminal-command' exact Component={TerminalClauseManager} />
        <AdminTemplate path='/admin' exact Component={AdminPageDefault} />

        <HomeTemplate path='/' exact Component={HomePage} />
      </Switch>
    </Router>

  );
}

export default App;
