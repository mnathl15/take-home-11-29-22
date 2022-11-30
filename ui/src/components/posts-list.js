import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import '../App.css';
import { selectPost } from '../posts/posts-slice';
const PostsList = () => {
    const posts = useSelector((state) => state.posts.value.posts)
    const selectedPost = useSelector((state) => state.posts.value.selectedPost)
    const [search, setSearch] = React.useState("")

    const [filteredPosts, setFilteredPosts] = React.useState([])
    const dispatch = useDispatch()

    const setSelectedPost = (id) => {
        dispatch(selectPost(id))
    }



    const getSearchedItems = (value) => {
        const filteredPosts = posts.filter((post) => post.title.includes(value))
        setSearch(value)
        setFilteredPosts(filteredPosts)
    }

    if (!posts) return <div>Loading...</div>
    return (
        <div className='post-list-component'>
            <input placeholder="search here" autoFocus value={search} onChange={(event) => getSearchedItems(event.target.value)}></input>
            <Posts posts={filteredPosts} setSelectedPost={setSelectedPost} selectedPost={selectedPost} />
        </div >
    );
}



const Posts = (props) => {

    const posts = props.posts;
    return (posts.map((post) => <Post post={post} setSelectedPost={props.setSelectedPost} selectedPost={props.selectedPost} />))
}

const Post = (props) => {
    const { title, body, id } = props.post
    const isSelected = id === props.selectedPost
    return (
        <div className='post'
            style={{ backgroundColor: isSelected && 'red' }}

            onClick={() => props.setSelectedPost(id)}>
            <h2>{title}</h2>
            <div >{body}</div>
        </div>
    )
}

export default PostsList;
