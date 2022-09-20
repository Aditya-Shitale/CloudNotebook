// import react from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState =(props)=>{

    const notesInitial=[
        
            {
              "_id": "632744b3732hdae7605d4a30b",
              "user": "6324c1cf44781da8e9ea0c9f",
              "title": "My note 1",
              "description": "Wake up early 1",
              "tag": "personal",
              "date": "2022-09-18T16:17:55.426Z",
              "__v": 0
            },
            {
              "_id": "632744b3732daje7605d4a30d",
              "user": "6324c1cf44781da8e9ea0c9f",
              "title": "My note 1",
              "description": "Wake up early 1",
              "tag": "personal",
              "date": "2022-09-18T16:17:55.560Z",
              "__v": 0
            },
            {
              "_id": "632744b3732dabe7605d4a30f",
              "user": "6324c1cf44781da8e9ea0c9f",
              "title": "My note 1",
              "description": "Wake up early 1",
              "tag": "personal",
              "date": "2022-09-18T16:17:55.736Z",
              "__v": 0
            },
            {
              "_id": "6327493229141kae7ee53993f",
              "user": "6324c1cf44781da8e9ea0c9f",
              "title": "My note updated 1",
              "description": "Wake up early updated 1",
              "tag": "personal",
              "date": "2022-09-18T16:37:06.964Z",
              "__v": 0
            },
            {
              "_id": "63274da18e5a1l177cfd53f26",
              "user": "6324c1cf44781da8e9ea0c9f",
              "title": "alarm 3",
              "description": "dsa bdj",
              "tag": "dsa Study",
              "date": "2022-09-18T16:56:01.665Z",
              "__v": 0
            },
            {
              "_id": "632763b8423bf2bat1928b847",
              "user": "6324c1cf44781da8e9ea0c9f",
              "title": "alarm 4",
              "description": "dsa here",
              "tag": "dsa Study",
              "date": "2022-09-18T18:30:16.228Z",
              "__v": 0
            },
            {
              "_id": "63289e7f126bc7gb3f4c52897",
              "user": "6324c1cf44781da8e9ea0c9f",
              "title": "alarm 4",
              "description": "dsa here",
              "tag": "dsa Study",
              "date": "2022-09-19T16:53:19.427Z",
              "__v": 0
            }
          
    ]
    const [notes,setNotes]=useState(notesInitial)
 
    //Add a note
  const addNote=(title, description, tag)=>{
    console.log("add a note");
      //Api calls to be cont
    const note ={
      "_id": "63289e7f126bhc7gb3f4c52897",
      "user": "6324c1cf44781da8e9ea0c9f",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-09-19T16:53:19.427Z",
      "__v": 0
    };
      setNotes(notes.concat(note));  //we wrote notes.push() first but we cant use it because concar returns an array whereas push updates an array
  }
    //Delete a note
 const deleteNote=()=>{
    
  }
    //update a note
    const editNote=()=>{
    
    }

        return(
            <NoteContext.Provider value={{notes,addNote, deleteNote, editNote}}>
                {props.children}
            </NoteContext.Provider>
        )
}
export default NoteState;