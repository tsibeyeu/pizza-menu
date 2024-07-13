const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  // cart:[]
  cart: [
    {
      pizzaId: 23,
      name:"Mediterranean",
      quantity: 2,
      unitprice: 16,
      totalprice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalprice = item.quantity * item.unitprice ;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalprice = item.quantity * item.unitprice ;

    },
    clearItem(state) {
        state.cart=[]
    }
  },
});

export const {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,clearItem}=cartSlice.actions;
export default cartSlice.reducer;