import { BOOK, DELETE } from "./actionTypes";

const initialState = [];

const flightBookingReducer = (state = initialState, action) => {
  const copiedState = [...state];
  const { type, payload, id } = action;

  switch (type) {
    case BOOK:
      // add book
      const lastBookId = copiedState[copiedState.length - 1]?.id;
      const newBook = { ...payload, id: lastBookId ? lastBookId + 1 : 1 };
      copiedState.push(newBook);
      console.log(copiedState);
      return copiedState;
    // delete book
    case DELETE:
      const updatedState = copiedState.filter((item) => item.id !== id);
      return updatedState;
    default:
      return state;
  }
};

export default flightBookingReducer;
