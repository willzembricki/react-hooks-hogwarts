import PigList from "./PigList.js"
import React, {useState} from "react"

function PigContainer({pigs}){
    const [isGreasy, setIsGreasy]= useState("false")
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
      <button>Greased</button>
      
      <ul>{pigListArray}</ul>  
        
        
    </div>


)
}









export default PigContainer