import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'




const AddPost = () => {
    const [newPost, setNewPost] = useState({
        title: '',
        body: '',
        userId: 1,
      });

const handleSubmit = async (event) =>{
        event.preventDefault()
        try{
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts',newPost)
            console.log(response.data)
            setNewPost({ title: '', body: '', userId: 1 });
        } catch(error){
            console.error("Error posting data",error);
        }
      }
  return (
    <>
    <h1>Create Post</h1>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formPostTitle">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter Title" onChange={(event)=>setNewPost({...newPost,
        title: event.target.value})} value={newPost.title} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formPostBody">
      <Form.Label>Post</Form.Label>
      <Form.Control type="text" placeholder="Add post Here" onChange={(event)=>setNewPost({...newPost,
        body:event.target.value})} value={newPost.body}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Add Post
    </Button>
  </Form>
  </>
  )
}

export default AddPost