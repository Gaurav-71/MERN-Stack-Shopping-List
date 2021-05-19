const initialState = {
  items: [],
  loading: false,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getItems":
      return { ...state, items: action.payload, loading: false };
    case "addItem":
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case "deleteItem":
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case "loading":
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default itemReducer;
