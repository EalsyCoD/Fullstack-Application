import React from "react";
import { useDispatch } from "react-redux";
import { setForm } from "src/store/actions/FormAction";
import { setNotes } from "src/store/actions/NotesAction";
import { Input } from "../Input";

import s from "./Form.module.scss";

export const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [date, setDate] = React.useState<string>("");

  const handleAdding = () => {
    const newNote = {
      title: title,
      description: description,
      date: date,
    };
    dispatch(setForm(newNote));
    dispatch(setNotes());
  };

  return (
    <div className={s.container}>
      <div>Form</div>
      <div className={s.form}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
        />
        <Input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="text"
          placeholder="Date"
        />
      </div>
      <button onClick={handleAdding}>Add notes</button>
    </div>
  );
};
