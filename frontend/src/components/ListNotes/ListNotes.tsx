import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/types";
import Moment from "react-moment";
import { setFilterASC, setFilterDSC } from "src/store/actions/NotesAction";
import s from "./ListNotes.module.scss";

export const ListNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes);
  const [filter, setFilter] = React.useState<string>("asc");

  const handleFilter = () => {
    if (filter === "asc") {
      dispatch(setFilterASC());
      setFilter("dsc");
    } else if (filter === "dsc") {
      dispatch(setFilterDSC());
      setFilter("asc");
    }
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.title}>
          <p>Title</p>
          <p>Description</p>
          <p onClick={handleFilter}>CreatedAt</p>
        </div>
        {notes.map((item) => (
          <div key={item.id} className={s.title}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>
              <Moment>{item.createdAt}</Moment>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
