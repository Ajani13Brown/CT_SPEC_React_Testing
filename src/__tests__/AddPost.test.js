import React from 'react'
import axios from 'axios'
import '@testing-library/jest-dom'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import AddPost from '../Components/AddPost';


jest.mock('axios')

describe('AddPost Test', () => {
    test('AddPost Form', async () => {
        render(<AddPost />);
        const mockResponse = { title: 'Test', body: 'Testing Component', userId: 1 };

        axios.get.mockResolvedValue(mockResponse);

        fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Test' } });
        fireEvent.change(screen.getByLabelText('Post'), { target: { value: 'Testing Component' } });

        fireEvent.click(screen.getByText('Add Post'));

        await waitFor(()=>{
            expect(axios.post).toHaveBeenCalledWith(
                'https://jsonplaceholder.typicode.com/posts',{title:'Test', body:'Testing Component', userId:1 }
            )
        })
    })
})