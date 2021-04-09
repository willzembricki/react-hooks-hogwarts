import PigList from "./PigList.js"
import React from "react"

function PigContainer({pigs}){
    // const [isGreasy, setIsGreasy]= useState(false)

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
      {/* <select name="filter" >
        <option onClick={setIsGreasy("All")}value="All">Filter by category</option>
        <option onClick={setIsGreasy("Greased")} value="Greased">Greased</option>
        <option onClick={setIsGreasy("Not Greased")} value="Not Greased">Not Greased</option>
      </select> */}
      
      <ul>{pigListArray}</ul>  
        
        
    </div>


)
}









export default PigContainer