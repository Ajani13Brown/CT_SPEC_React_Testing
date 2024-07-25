import React from 'react';
import axios from 'axios';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import UpdatePost from '../Components/UpdatePost';

jest.mock('axios');

describe('UpdatePost Test', () => {
  test('UpdatePost Form', async () => {
    render(<UpdatePost />);
    
    fireEvent.change(screen.getByLabelText('Post ID'), { target: { value: '1' } });
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Updated Title' } });
    fireEvent.change(screen.getByLabelText('Post'), { target: { value: 'Updated Body' } });

    const mockResponse = { data: { id: 1, title: 'Updated Title', body: 'Updated Body', userId: 1 } };
    axios.put.mockResolvedValue(mockResponse);

    fireEvent.submit(screen.getByText('Update'));

    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/posts/1',
        { id: '1', title: 'Updated Title', body: 'Updated Body', userId: 1 }
      );
    });
  });
});
