import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts, initializePosts } from './posts/posts-slice'

import './App.css';
import PostsList from './components/posts-list';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div className="App">
      <PostsList />

    </div>
  );
}

export default App;
