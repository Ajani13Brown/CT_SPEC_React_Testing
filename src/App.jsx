import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPosts from './Components/ListPost'
import AddPost from './Components/AddPost';

const App = () => {
  return (
    <>
    <AddPost />
    <ListPosts/>
    </>
  )
}

export default App