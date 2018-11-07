import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import logo from "./logo.svg";
import "./index.css";

const hipsterIpsum = (
  <p>
    Vape activated charcoal celiac gochujang, ugh master cleanse blue bottle fam
    chia ennui lumbersexual. Brooklyn XOXO prism blog retro, coloring book
    seitan knausgaard copper mug air plant chillwave try-hard hammock irony.
    Trust fund lomo PBR&B next level cred listicle austin migas semiotics vape
    echo park. Meggings echo park pork belly gastropub etsy vice blog next level
    tousled chartreuse. 8-bit venmo stumptown butcher schlitz vice. Microdosing
    bespoke brooklyn mlkshk, ramps before they sold out +1 everyday carry
    narwhal umami post-ironic.
  </p>
);

const pinkmanIpsum = (
  <p>
    What business? The business you put me on, asshole! What, you already
    forgot? THIS business. Huh? That uh jog your memory, son of a bitch? Hey,
    you said... you said handle it, so you know what, I handled it. Didn't mean
    to kill somebody? Well, too late you know cause, dude's dead. Way dead. Oh,
    and hey, hey. Here's your money. Yeah, forty-six hundred and sixty bucks.
    Your half. Spend it in good health, you miserable son of bitch.
  </p>
);

const samuelLIpsum = (
  <p>
    The path of the righteous man is beset on all sides by the iniquities of the
    selfish and the tyranny of evil men. Blessed is he who, in the name of
    charity and good will, shepherds the weak through the valley of darkness,
    for he is truly his brother's keeper and the finder of lost children. And I
    will strike down upon thee with great vengeance and furious anger those who
    would attempt to poison and destroy My brothers. And you will know My name
    is the Lord when I lay My vengeance upon thee.
  </p>
);

const RoutingDemo: React.SFC = () => (
  <>
    <ul>
      <li>
        <NavLink
          to="/"
          exact
          className="App-NavLink"
          activeClassName="App-NavLink-selected"
        >
          Main
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="App-NavLink"
          activeClassName="App-NavLink-selected"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className="App-NavLink"
          activeClassName="App-NavLink-selected"
        >
          Contact us
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route path="/" exact render={routeProps => hipsterIpsum} />
      <Route path="/about" render={routeProps => pinkmanIpsum} />
      <Route path="/contact-us" render={routeProps => samuelLIpsum} />
    </Switch>
  </>
);

const App: React.SFC = () => (
  <Router basename={process.env.REACT_APP_PUBLIC_URL || undefined}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RoutingDemo />
      </header>
    </div>
  </Router>
);

export default App;
