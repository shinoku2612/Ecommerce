import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            const itemIndex = state.products.findIndex(
                item => item._id === action.payload._id
            );
            if (itemIndex >= 0) {
                state.products[itemIndex].quantity += action.payload.quantity;
                state.quantity += action.payload.quantity;
                state.total += action.payload.quantity * state.products[itemIndex].price;
                state.total = Math.round(state.total * 100) / 100;
            } else {
                const tempProducts = { ...action.payload, quantity: action.payload.quantity };
                state.products.push(tempProducts);
                state.quantity += action.payload.quantity;
                state.total += action.payload.price * action.payload.quantity;
                state.total = Math.round(state.total * 100) / 100;
            }
        },
        removeProduct: (state, action) => {
            const newProducts = state.products.filter(item =>
                item._id !== action.payload._id
            );
            state.quantity -= action.payload.quantity;;
            state.total -= action.payload.price * action.payload.quantity;
            state.total = Math.round(state.total * 100) / 100;
            state.products = newProducts;
        },
        decreaseProduct: (state, action) => {
            const itemIndex = state.products.findIndex(
                item => item._id === action.payload._id
            );
            if (state.products[itemIndex].quantity > 1) {
                state.products[itemIndex].quantity -= 1;
                state.quantity -= 1;
                state.total -= state.products[itemIndex].price;
                state.total = Math.round(state.total * 100) / 100;
            }
        },
        increaseProduct: (state, action) => {
            const itemIndex = state.products.findIndex(
                item => item._id === action.payload._id
            );
            if (state.products[itemIndex].quantity < 999) {
                state.products[itemIndex].quantity += 1;
                state.quantity += 1;
                state.total += state.products[itemIndex].price;
                state.total = Math.round(state.total * 100) / 100;
            }
        }
    }
});

export const { addProduct, removeProduct, decreaseProduct, increaseProduct } = cartSlice.actions;
export default cartSlice.reducer;