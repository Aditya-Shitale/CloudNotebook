import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { ChakraProvider,useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    Button,
    
  } from '@chakra-ui/react'


const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  const [note, setNote] = useState({ etitle: "", edescription: "", etag: "", });
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, [])
  const ref = useRef(null);

  const updateNote = (currentNote) => {
    console.log("click is been done");
     ref.current.click();
     setNote({etitle:currentNote.title,edescription:currentNote.description,etag: currentNote.tag});
  };
  const handleClick = (e) => {
    console.log("updating the note",note)
    e.preventDefault();
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

  return (
    <>
      <AddNote />
      <ChakraProvider>
      <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
          {/* Some other content that'll receive focus on close. */}
        </Box>
  
        <Button ref={ref} mt={4} onClick={onOpen} style={{display:"none"}}>
         Edit note
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

            <form className="my-3"> 
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="email"
              className="form-control"
              id="etitle"
              name="etitle"
              value={note.etitle}
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              value={note.edescription}
              id="edescription"
              name="edescription"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="etag"
              name="etag"
              value={note.etag}
              onChange={onChange}
            />
          </div>
        
        </form>

            </ModalBody>
  
            <ModalFooter>
              <Button  variant='ghost' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='blue' onClick={handleClick}>Update</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </ChakraProvider>


      <div className="row my-3">
        <h3>Your notes here</h3>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} />
          
        })}
      </div>
    </>
  );
};

export default Notes;
