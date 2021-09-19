import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Profile from "./components/Profile.js"
import Learn from "./components/Learn.js"
import Credit_Lookup_Tool from "./components/Credit_Lookup_Tool.js"
import Support from "./components/Support.js"
import Products from "./components/Products.js"
import Updates from "./components/Updates.js"
import Legal from "./components/Legal.js"
import About from "./components/About.js"
import Meet_The_Team from "./components/Meet_The_Team.js"
import Login from "./components/Login.js"
import Credit_History from "./components/Credit_History.js"
import Credit_Activity from "./components/Credit_Activity.js"

function App() {

return (
  
    <Router>
      <div className="app">
        <Switch>
        <Route path="/credit_history">
            <Header />
            <Credit_History />
            <Footer />
          </Route>
          <Route path="/credit_activity">
            <Header />
            <Credit_Activity />
            <Footer />
          </Route>
        <Route path="/profile">
            <Header />
            <Profile />
            <Footer />
          </Route>
          <Route path="/learn">
            <Header />
            <Learn />
            <Footer />
          </Route>
          <Route path="/credit_lookup_tool">
            <Header />
            <Credit_Lookup_Tool />
            <Footer />
          </Route>
          <Route path="/support">
            <Header />
            <Support />
            <Footer />
          </Route>
          <Route path="/products">
            <Header />
            <Products />
            <Footer />
          </Route>
          <Route path="/updates">
            <Header />
            <Updates />
            <Footer />
          </Route>
          <Route path="/legal">
            <Header />
            <Legal />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/meet_the_team">
            <Header />
            <Meet_The_Team />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
            <Footer />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>

);
}
export default App;