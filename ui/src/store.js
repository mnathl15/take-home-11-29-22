import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './posts/posts-slice'



export default configureStore({
    reducer: {
        posts: postsReducer
    },
})