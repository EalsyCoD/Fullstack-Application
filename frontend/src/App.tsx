import React from "react";
import { useDispatch } from "react-redux";

import { Form, ListNotes } from "./components";

import { setNotes } from "./store/actions/NotesAction";

import s from "./App.module.scss";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setNotes());
  }, []);

  return (
    <>
      <div className={s.container}>
        <ListNotes />
        <Form />
      </div>
    </>
  );
};

export default App;
