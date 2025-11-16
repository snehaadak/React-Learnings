import { render } from "@testing-library/react"
import HeaderComp from "../HeaderComp"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import reduxStore from "../../Utilities/reduxStore"
import { BrowserRouter } from "react-router-dom"

it("Should load the Header Component with the Login Button", ()=>{
    render(
    <BrowserRouter>  
        <Provider store={reduxStore}>
            <HeaderComp/>
        </Provider>
    </BrowserRouter> 
)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
})