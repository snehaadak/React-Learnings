import { render, screen } from "@testing-library/react"
import AboutUs from "../AboutUs"
import "@testing-library/jest-dom"


test("Should Render Button" , () => {
    render(<AboutUs/>)
    
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument();
})


test("Should Developer's Name" , () => {
    render(<AboutUs/>)

    const title = screen.getByText("Sneha Adak")
    expect(title).toBeInTheDocument();
})


