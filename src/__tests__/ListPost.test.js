import React from 'react';
import axios from 'axios';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListPosts from '../Components/ListPost';

jest.mock('axios')

describe('ListPost Intergration test', () => {
    test("Post list Componet Test", async () => {
        const mockResponse={
            data:[
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }
            ]
        }
        
        axios.get.mockResolvedValue(mockResponse);

        render(<ListPosts />)
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts')


        const { asFragment } = render(<ListPosts />)
        expect(asFragment()).toMatchSnapshot()

        })

    })
})