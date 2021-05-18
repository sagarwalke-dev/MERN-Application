import Header from "./components/Header";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Contact from "./components/Contact";
import Registration from "./components/Registration";
import Login from "./components/Login";
import About from "./components/About";
import Logout from "./components/Logout";
import Error from "./components/Error";
import { Route, Switch } from "react-router-dom";
import "./index.css";
import "./App.css";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "../src/services/reducer";
export const UserContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/about' component={About} />

          <Route exact path='/User-profile' component={UserProfile} />

          <Route path='/Contact' component={Contact} />

          <Route exact path='/Registration' component={Registration} />

          <Route exact path='/Login' component={Login} />

          <Route exact path='/Logout' component={Logout} />

          <Route component={Error} />
        </Switch>
      </UserContext.Provider>
    </>
  );
}

export default App;
