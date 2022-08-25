import { FormAction, NewForm } from "../types";

export type Form = {
  form: NewForm;
};

const initialState: Form = {
  form: {
    title: "",
    description: "",
    date: "",
  },
};

const RepoReducer = (state: Form = initialState, action: FormAction) => {
  switch (action.type) {
    case "NEW-FORM":
      return (state.form = action.payload);
    default:
      return state;
  }
};

export default RepoReducer;
