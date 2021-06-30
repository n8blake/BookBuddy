import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search";
import Header from './components/Header';
import NoMatch from "./pages/NoMatch";
import { StoreProvider } from './utils/GlobalState';

import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <StoreProvider>
      <Router>
        <main className="container">
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
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
        </main>
        </Router>
        </StoreProvider>
    </div>
  );
}

export default App;
