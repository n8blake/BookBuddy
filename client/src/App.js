import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Search from "./components/Search";
import SearchControls from "./components/SearchControls";
import SearchResults from "./components/SearchResults/SearchResults";
import Header from './components/Header';
import NoMatch from "./pages/NoMatch";
import { StoreProvider } from './utils/GlobalState';

import './App.scss';


function App() {
  return (
      <StoreProvider>
      <Header />
      
      <Router>
        
        <Switch>
          <Route exact path={["/", "/search"]}>
            <SearchControls />
            <SearchResults />
          </Route>
          <Route exact path={["/library", "/books"]}>
            <div>saved books page</div>
          </Route>
          <Route exact path={["/books/:id"]}>
            <div>individual book page</div>
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        
        </Router>
        </StoreProvider>
    
  );
}

export default App;
