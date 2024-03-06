import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware),

    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
});     