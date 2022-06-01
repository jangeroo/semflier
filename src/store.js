const initialState = {
  seminar: null,
  dates: [],
};

const reducer = (state, action) => {
  console.log({ action });
  switch (action.type) {
    case "SELECT_SEMINAR":
      return { ...state, seminar: action.seminar };
    default:
      return state;
  }
};

const actions = {
  SELECT_SEMINAR: (seminar) => {
    return { type: "SELECT_SEMINAR", seminar };
  },
};

export { reducer, initialState, actions };
