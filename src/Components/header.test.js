import { render , screen } from "@testing-library/react";
import Header from './Header.js';

describe('Rendering of basic components of Todo List',()=>{
    test('Rendering of title above form',()=>{
        render(<Header/>);

        const title = screen.getByText('Welcome To TODOmatic');

        expect(title).toBeInTheDocument();
    })
})