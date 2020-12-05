import React, { useState, lazy, Suspense } from "react";
import { Router } from "@reach/router";
import ThemeContext from "./ThemeContext.js";
import NavBar from "./NavBar.js";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <NavBar />
        <Suspense fallback={<h1>loading route ...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
