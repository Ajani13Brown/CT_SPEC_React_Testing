import React from 'react';
import axios from 'axios';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListPosts from '../Components/ListPost';

jest.mock('axios')

describe('ListPost Intergration test', () => {
    test("Post list Componet Test", async () => {
        
        render(<ListPosts />)
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts')


        const { asFragment } = render(<ListPosts />)
        expect(asFragment()).toMatchSnapshot()

        })

    })
})