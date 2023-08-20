import { BOOK, DELETE } from "./actionTypes";

export const book = (value) => {
  return {
    type: BOOK,
    payload: value,
  };
};

export const deleteBook = (id) => {
  return {
    type: DELETE,
    id: id,
  };
};
