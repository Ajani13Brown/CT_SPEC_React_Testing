import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const UpdatePost = () => {
    const [post, setPost] = useState({
        id: '',
        title: '',
        body: '',
        userId: 1 
      });

      const handleSubmit = async (event) =>{
        event.preventDefault()
        try{
            const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,post)
            console.log(response.data)
            setPost({ title: '', body: '', id:"" , userId: 1 });
        } catch(error){
            console.error("Error posting data",error);
        }
      }
    
  return (
    <>
    <h2>Update Post</h2>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formPostId">
          <Form.Label>Post ID</Form.Label>
          <Form.Control type="number" placeholder="Enter Post ID"name="id" onChange={(event)=>setPost({...post,
        id: event.target.value})} value={post.id} />
          </Form.Group>
    <Form.Group className="mb-3" controlId="formPostTitle">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter Title" onChange={(event)=>setPost({...post,
        title: event.target.value})} value={post.title} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formPostBody">
      <Form.Label>Post</Form.Label>
      <Form.Control type="text" placeholder="Add post Here" onChange={(event)=>setPost({...post,
        body:event.target.value})} value={post.body}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Update
    </Button>
  </Form>

    </>
  )
}

export default UpdatePost