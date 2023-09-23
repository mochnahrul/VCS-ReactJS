import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

// Reducer
const addToCart = createAction("ADD");

const cartReducer = createReducer([{ id: 1, qty: 10 }], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const sessionLogin = createAction("SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(sessionLogin, (state, action) => {
    state.status = true;
  });
});

// Store
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log(store.getState());

// Subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch
store.dispatch(addToCart({ id: 2, qty: 20 }));
store.dispatch(sessionLogin());
