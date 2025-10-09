import { render, screen } from "@testing-library/react"
import Grocery from "../Grocery"
import "@testing-library/jest-dom"


test("Should render Grocery component", ()=>{
    render(<Grocery/>);
    const headings = screen.getAllByRole("heading");

    expect(headings[0]).toBeInTheDocument();
    expect(headings[1]).toBeInTheDocument();
})

    
//     the expect and to be we can use it by different ways too as mentioned below
// 1) const headings = screen.getAllByRole("heading");
//    expect(headings).toHaveLength(2);


// 2) expect(
//     screen.getByText(/instant grocery delivery/i)
//   ).toBeInTheDocument();

//   expect(
//     screen.getByText(/its own new alot of components/i)
//   ).toBeInTheDocument();