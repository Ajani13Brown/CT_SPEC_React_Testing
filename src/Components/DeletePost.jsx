import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const DeletePost = () => {
  const [post, setPost] = useState({
    id: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const fetchResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
        const postData = fetchResponse.data;
        console.log('Post to be deleted:', postData);

      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
      setPost({ id: '' });
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      <h2>Delete a Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formPostIdNumber">
          <Form.Label>Post ID:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Post ID"
            onChange={(event) => setPost({ id: event.target.value })}
            value={post.id}
          />
          <Form.Text className="text-muted">
            Enter the ID number of the post you want to delete.
          </Form.Text>
        </Form.Group>
        <Button variant="danger" type="submit">
          Delete Post
        </Button>
      </Form>
    </>
  );
};

export default DeletePost;
