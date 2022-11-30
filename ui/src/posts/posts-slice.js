import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        value: {
            posts: null,
            selectedPost: null
        },
    },
    reducers: {
        initializePosts: (state, action) => {
            state.value.posts = action.payload
        },
        getPosts: (state) => {
            return state.value
        },
        selectPost: (state, action) => {
            state.value.selectedPost = action.payload
        }
    }

})


export const fetchPosts = () => async dispatch => {
    const posts = await axios.get('/getPosts')
    dispatch(initializePosts(posts.data))
}
export const { getPosts, initializePosts, selectPost } = postsSlice.actions

export default postsSlice.reducer