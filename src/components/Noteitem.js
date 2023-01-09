import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export default function Noteitem(props) {
    const { note, updateNote } = props;
    const context = useContext(noteContext);
    const { deleteNote } = context;
    return (
        <div className='col-md-3'>
            <div className="card my-3" >
                <div className="card-body">
                    <div className="d-flex align-items-center ">
                        <h5 className="card-title" style={{ margin: "0" }}>{note.title}</h5>
                        <i className="fa-regular fa-trash-can mx-2" onClick={() => {
                            deleteNote(note._id);
                            props.showAlert("Deleted Successfully", "success");

                        }}></i>
                        <i className="fa-regular fa-edit mx-2" onClick={() => {
                            updateNote(note);
                        }}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <p className="card-text"><small className="text-muted">{note.tag}</small></p>
                </div>
            </div>
        </div>
    )
}
