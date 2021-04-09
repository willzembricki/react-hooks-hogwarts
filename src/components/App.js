import React, {useState} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PigContainer from "./PigContainer";

function App() {
  const fullHog = hogs
  const [greaseClick, setGreaseClick] = useState(false)
  const [sortClick, setSortClick] = useState("")
  function onHandledGreased(){
    setGreaseClick(!greaseClick)
  }
  function onHandleSortName(){
    
    setSortClick("name")

  }
  function onHandleSortWeight(){
    setSortClick('weight')
  }
  const newGreasyArr = greaseClick ? hogs.filter((hog)=> hog.greased === true) : fullHog
  let sortedArr = newGreasyArr
  if(sortClick === 'name'){

    sortedArr = newGreasyArr.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }else if(sortClick === 'weight'){

    sortedArr = newGreasyArr.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
  }
  return (
    <div className="App">
      <Nav 
      handleGreased = {onHandledGreased} 
      handleSortName = {onHandleSortName} 
      handleSortWeight = {onHandleSortWeight} />
      <PigContainer pigs = {sortedArr}/>
    </div>
  );
}
export default App;
