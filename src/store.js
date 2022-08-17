import { setDatesFromSession } from "./utils";

const initialState = {
  seminar: null,
  dates: [...Array(10)],
};

const reducer = (state, action) => {
  console.log("Dispatched", action);
  switch (action.type) {
    case "SELECT_SEMINAR":
      return { ...state, seminar: action.seminar };
    case "SET_DATES":
      const dates = setDatesFromSession(action.fromSession, action.date, [
        ...state.dates,
      ]);
      return { ...state, dates };
    default:
      throw new Error(`Unknown reducer action: ${action.type}`);
  }
};

const actions = {
  SELECT_SEMINAR: (seminar) => {
    return { type: "SELECT_SEMINAR", seminar };
  },
  SET_DATES: (fromSession, date) => {
    return { type: "SET_DATES", fromSession, date };
  },
};

export { reducer, initialState, actions };
