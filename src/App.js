import React, { useState } from "react";
import { Router } from "@reach/router";
import ThemeContext from "./ThemeContext.js";
import NavBar from "./NavBar.js";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <NavBar />
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
