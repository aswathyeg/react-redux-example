import { useState } from "react";
import { useDispatch } from "react-redux";
import {changebackGround} from './features/background'

 export default function ChangeBackGround(){
     const [color,setColor] =useState("");
     const dispatch=useDispatch();
     return(
         <div>
             <input type="text" 
             onChange={(event)=>{setColor(event.target.value)} }/>
             <button onClick= {()=>{
                 dispatch(changebackGround(color))}
             }>
                 ChangeBackGround  
             </button>
         </div>
     )

 }