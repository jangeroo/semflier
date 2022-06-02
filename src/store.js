const initialState = {
  seminar: null,
  dates: [],
};

const reducer = (state, action) => {
  console.log({ action });
  switch (action.type) {
    case "SELECT_SEMINAR":
      return { ...state, seminar: action.seminar };
    case "SET_DATES":
      return { ...state, dates: action.dates };
    default:
      throw new Error(`Unknown reducer action: ${action.type}`);
  }
};

const actions = {
  SELECT_SEMINAR: (seminar) => {
    return { type: "SELECT_SEMINAR", seminar };
  },
  SET_DATES: (dates) => {
    return { type: "SET_DATES", dates };
  },
};

export { reducer, initialState, actions };
