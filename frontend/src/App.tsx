import React from "react";

import { Form, ListNotes } from "./components";

import s from "./App.module.scss";
import { useDispatch } from "react-redux";
import { setNotes } from "./store/actions/NotesAction";

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
