import React, {useState} from "react"

function PigList({name,imgSrc, specialty, greased,weight,medal}){
  const [fullPiggy, setFullPiggy] = useState(false)
    function togglePiggy(){
        setFullPiggy(!fullPiggy)
    }
  
  if(!fullPiggy) { return(
    <div >
        <h2>{name}</h2>
        <img onClick = {togglePiggy} src={imgSrc} alt = {name} width = "200px" height = "200px" />
        
    </div>    

   )}
else if(fullPiggy) {return(
 <div >
    <h2>{name}</h2>
    <img onClick = {togglePiggy} src={imgSrc} alt = {name} width = "200px" height = "200px" />
    <p>Specialty: {specialty},<br/>
    Greased: {greased.toString()},<br/>
    Weight: {weight},<br/>
    Heighest Medal Achieved: {medal}</p>
</div> 
    

)}
}
export default PigList;