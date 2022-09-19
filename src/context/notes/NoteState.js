// import react from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState =(props)=>{
        const s1 ={
            "name":"adi",
            "class": "12b"
        }
        const [state, setState]= useState(s1);
       const update=()=>{
            setTimeout(() => {
                setState({
                    "name":"aditya",
                    "class": "11c"
                })
            }, 1000);
        }
        return(
            <NoteContext.Provider value={{state:state,update:update}}>
                {props.children}
            </NoteContext.Provider>
        )
}
export default NoteState;