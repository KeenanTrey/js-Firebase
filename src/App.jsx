 import firebaseApp from './firebase/firebase.config'
 import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
 import HomePage from './pages/HomePage'
 import LoginPage from './pages/LoginPage'
 import RegisterPage from './pages/RegisterPage'
 import NotFound from './pages/404'
 import AppBar from './components/appbar/AppBar'
 import DashBoard from './pages/dashboard/DashBoard'
 import AuthContext, {AuthProvider} from './auth/AuthContext'
function App() { 

  return (
    <AuthProvider>
      <Router>
        <AppBar/>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/login"><LoginPage/></Route>
          <Route exact path="/register"><RegisterPage/></Route>
          <Route exact path="/dashboard"><DashBoard/></Route>
          <Route exact path="*"><NotFound/></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

