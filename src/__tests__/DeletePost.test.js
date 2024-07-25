import React from 'react';
import axios from 'axios';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import DeletePost from '../Components/DeletePost';

jest.mock('axios');

describe('DeletePost Test', () => {
  test('DeletePost Form', async () => {
    render(<DeletePost />);
    
    fireEvent.change(screen.getByLabelText('Post ID:'), { target: { value: '1' } });

    const mockResponse = { data: { id: 1, title: 'Test Delete', body: 'Testing delete post functionality', userId: 1 } };
    axios.get.mockResolvedValue(mockResponse);

    fireEvent.click(screen.getByText('Delete Post'));

    await waitFor(() => {
      expect(axios.delete).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1');
    });
  });

});
