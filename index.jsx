import { useState } from "react"
import data from "./data"
import './styles.css'
export default function Accordian (){
    const [selected,setSelected]=useState(null)
    const [enableMultiSelection,setEnableMultiSelection]=useState(false)
    const [multiple,setMultiple]=useState([]);
    function handleSingleSelection(getCurrentId)
    {
     setSelected(getCurrentId === selected ? null: getCurrentId);
    }
    function handalMultiSelection(getCurrentId){

    }
    console.log(selected)

    return<div className="wrapper">
        <button>Enable Multi Selection</button>
       <div className="accordian">
        {
            data && data.length > 0  ? 
            data.map(dataItam =><div className="itam">
                <div onClick={()=>handleSingleSelection(dataItam.id)} className="title">
                    <h3>{dataItam.que}</h3>
                    <span>+</span>
                
                    </div>
                    {
                        selected===dataItam.id ? 
                        <div className="content"> {dataItam.ans}</div>
                        :null
                    }

            </div>):(<div> NO data found !</div>
            
       ) }

       </div>
        </div>

    

}