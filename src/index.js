import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/searchBar";

export const API_KEY = "AIzaSyAeTikiOkvpBEiAyKZLJMUzJIYwqqMYgFY";

//Create a new component
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML into page(in the DOM)

ReactDOM.render(<App />, document.querySelector(".container"));
