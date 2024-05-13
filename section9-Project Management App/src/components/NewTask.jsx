import React, { useRef, useState } from "react";
import Modal from "./Modal";

const NewTask = ({ onAdd }) => {
  const modal = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <Modal ref={modal} buttonCaption="Close">
        <p className="text-stone-600 mb-4 ">
          Oops ... looks like you forgot to inter a vlaue for the new Task
        </p>
        <p className="text-stone-600 mb-4 ">
          Please make sure you provide a value for the input field
        </p>
      </Modal>
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
