import { useState } from 'react';
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const[ modalisOpen , setModalIsOpen ] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHanlder() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalisOpen && <Modal onCancel={closeModalHanlder} onConfirm={closeModalHanlder} />}
      {modalisOpen && <Backdrop onClick={closeModalHanlder}/>}
    </div>
  );
}

export default Todo;
