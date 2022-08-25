import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { NewForm, NotesState, RootState } from "../types";

const baseUrl: string = "http://localhost:3001/api/";

const setForm = (
  newNote: NewForm
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post<NotesState>(
        `${baseUrl}/create`,
        newNote
      );
      dispatch({
        type: "NEW-FORM",
        payload: data,
      });
    } catch (error) {}
  };
};

export { setForm };
