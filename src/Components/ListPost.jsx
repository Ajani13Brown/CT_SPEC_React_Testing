import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const ListPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2 className="text-center">Post List</h2>
      {posts.map((post, index) => (
        <Card className='mt-3 ' key={index} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListPosts;
