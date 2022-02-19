import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../redux/basket"

 const store = configureStore({
  reducer: {
    basket: basketReducer
  }
 })

export default store;