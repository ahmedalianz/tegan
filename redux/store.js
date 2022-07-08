import admin from "./admin";
import { configureStore } from "@reduxjs/toolkit";
import products from "./products";

export default configureStore({
  reducer: { admin,  products, },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
