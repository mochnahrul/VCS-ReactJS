import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

// Slice Reducer
const cartSlice = createSlice({
  name: "cart",
  initialState: [{ id: 1, qty: 10 }],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: { status: false },
  reducers: {
    sessionLogin(state, action) {
      state.status = true;
    },
  },
});

// Store
const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    cart: cartSlice.reducer,
  },
});
console.log(store.getState());

// Subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 10 }));
store.dispatch(loginSlice.actions.sessionLogin());
