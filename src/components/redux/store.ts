import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/productsSlice'
import statisticSlice from './slices/statisticSlice'
// ...

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer
    products: productsSlice,
    statistic: statisticSlice
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store