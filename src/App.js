import './styles/App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "@material-tailwind/react/tailwind.css";
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import NavBar from './components/NavBar';
import { useStateValue } from './StateProvider'

function App() {

  const [{user}] = useStateValue();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'> 
            <NavBar />
            <RegisterPage />
          </Route>
          <Route exact path='/Login'>
            <NavBar />
            <LoginPage />
          </Route>
          <Route exact path='/Profile'>
            <NavBar />
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
