import PigList from "./PigList.js"
import React, {useState} from "react"

function PigContainer({pigs}){
    const [isGreasy, setIsGreasy]= useState("All")

    function handleGreasyChange(event) {
        console.log(event.target.value);
        setIsGreasy(event.target.value)
      }

      const pigsToDisplay = pigs.filter((pig) => {
        if (isGreasy === "All") return true;
    
        return pig.greased === isGreasy;
      });
    
    // function handleGreasyFilter(){
    //     const filterPiggyArr = pigs.filter((pig) =>{
    //         return(pig.greased === isGreasy)
    //     })
    //     setIsGreasy(!isGreasy)
    //     console.log(filterPiggyArr)
    //     const filterPigs = filterPiggyArr.map((pig) =>{
    //         return( <PigList
    //             key = {pig.name} 
    //             name = {pig.name} 
    //             imgSrc = {pig.image} 
    //             specialty = {pig.specialty}
    //             greased = {pig.greased}
    //             weight = {pig.weight}
    //             medal = {pig["highest medal achieved"]}/>)
    //     })
    // }
    
    const pigListArray = pigs.map((pig) =>{
        return( <PigList
            key = {pig.name} 
            name = {pig.name} 
            imgSrc = {pig.image} 
            specialty = {pig.specialty}
            greased = {pig.greased}
            weight = {pig.weight}
            medal = {pig["highest medal achieved"]}/>)
    })



return(
    <div id = "pig-containter">
      <h1>Pigs</h1>
      <select name="filter" onChange={handleGreasyChange}>
        <option value="All">Filter by category</option>
        <option value="Greased">Greased</option>
        <option value="Not Greased"> Not Greased {pigsToDisplay.map((pig) => 
        <PigList
            key = {pig.name} 
            name = {pig.name}
            imgSrc = {pig.image} 
            specialty = {pig.specialty}
            greased = {pig.greased}
            weight = {pig.weight}
            medal = {pig["highest medal achieved"]} /> )}
        </option>
      </select>
      
      <ul>{pigListArray}</ul>  
        
        
    </div>


)
}









export default PigContainer