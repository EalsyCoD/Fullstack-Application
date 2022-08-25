import { NotesAction, NotesState } from "../types";

const initialState: NotesState = [
  {
    id: 0,
    title: "",
    description: "",
    date: "",
    createdAt: "",
  },
];

const RepoReducer = (
  state: NotesState = initialState,
  action: NotesAction
): NotesState => {
  switch (action.type) {
    case "NEW-NOTES":
    case "NEW-NOTES-FILTER-ASC":
    case "NEW-NOTES-FILTER-DSC":
      return action.payload;

    default:
      return state;
  }
};

export default RepoReducer;
