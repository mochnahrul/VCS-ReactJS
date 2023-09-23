import { legacy_createStore } from "redux";

// Reducer
const cartReducer = (
  state = {
    cart: [
      {
        id: 1,
        qty: 10,
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// Store
const store = legacy_createStore(cartReducer);
console.log(store.getState());

// Subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch
const action1 = {
  type: "ADD",
  payload: { id: 2, qty: 10 },
};
store.dispatch(action1);

const action2 = {
  type: "ADD",
  payload: { id: 3, qty: 10 },
};
store.dispatch(action2);
