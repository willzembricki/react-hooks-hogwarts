import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PigContainer from "./PigContainer";

function App() {
  return (
    <div className="App">
      <Nav />
      <PigContainer pigs = {hogs}/>
    </div>
  );
}

export default App;
