import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPosts from './Components/ListPost'
import AddPost from './Components/AddPost';
import UpdatePost from './Components/UpdatePost';
import DeletePost from './Components/DeletePost';

const App = () => {
  return (
    <>
    <DeletePost/>
    <UpdatePost/>
    <AddPost />
    <ListPosts/>
    </>
  )
}

export default App