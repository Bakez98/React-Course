import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const descreption = useRef();
  const duedate = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescreption = descreption.current.value;
    const enteredDuedate = duedate.current.value;

    //validation....
    if (
      enteredTitle.trim() === "" ||
      enteredDescreption.trim() === "" ||
      enteredDuedate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      descreption: enteredDescreption,
      dueDate: enteredDuedate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4 ">
          Oops ... looks like you forgot to inter a vlaue
        </p>
        <p className="text-stone-600 mb-4 ">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={descreption} label="Descreption" textarea />
          <Input type="date" ref={duedate} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;