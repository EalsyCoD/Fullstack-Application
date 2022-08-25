import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { NotesState, RootState } from "../types";

const baseUrl: string = "http://localhost:3001/api/";

const setNotes = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get<NotesState>(`${baseUrl}/read`);
      dispatch({
        type: "NEW-NOTES",
        payload: data,
      });
    } catch (error) {}
  };
};
const setFilterASC = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get<NotesState>(
        `${baseUrl}/getsort?order=asc`
      );
      dispatch({
        type: "NEW-NOTES-FILTER-ASC",
        payload: data,
      });
    } catch (error) {}
  };
};
const setFilterDSC = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get<NotesState>(
        `${baseUrl}/getsort?order=dsc`
      );
      dispatch({
        type: "NEW-NOTES-FILTER-DSC",
        payload: data,
      });
    } catch (error) {}
  };
};

export { setNotes, setFilterASC, setFilterDSC };
