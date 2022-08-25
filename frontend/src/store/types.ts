export interface RootState {
  notes: NotesState;
}

export type NotesState = [
  {
    id: number;
    title: string;
    description: string;
    createdAt: string;
  }
];

export type Notes = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
};

export type NewForm = {
  title: string;
  description: string;
  date: string;
};

export type FormAction = {
  type: string;
  payload: NewForm;
};

export type NotesAction = {
  type: string;
  payload: NotesState;
};
