// Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components/macro';

// Pages
import { Home, Projects, NoMatch} from "./pages";

// Components
import { Nav } from "./components";

// Elements

// Utilities
import { GlobalStyle } from './utilities';

function App() {
  
  const themes = [{
    colors: {
      primary: '#34ace0',
      secondary: '#2c2c54',
      background: 'black',
      text: 'white'
    }
  },{
    colors: {
      primary: 'lightblue',
      secondary: 'purple',
      background: 'white',
      text: 'black'
    }
  }];

  return (
    <Router>
      <ThemeProvider theme={themes[0]}>
      <div>
        <GlobalStyle/>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
