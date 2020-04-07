import React from "react";
import Home from "./pages/Home";
import Commands from "./pages/Commands";
import Credit from "./pages/Credits";
import Legal from "./pages/Legal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="backgroundImage"></div>
        <Sidebar />
        <div className="main">
          <Switch>
            <Route path="/(|home)/" component={Home} />
            <Route path="/(commands)/" component={Commands} />
            <Route path="/(credits)/" component={Credit} />
            <Route
              path="/(leaderboard)/:leaderboardType/:guildId"
              component={Leaderboard}
            />
            <Route
              path="/(leaderboard)/:leaderboardType/"
              component={Leaderboard}
            />
            <Route path="/(legal)/" component={Legal} />
          </Switch>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
