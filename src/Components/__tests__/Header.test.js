import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


describe("Header tests",()=>{
test("render login button", ()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    )

    const loginBtn = screen.getByText("Cart(0)")
    expect(loginBtn).toBeInTheDocument();
})

test("buttonChangeOnClick", ()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    )

    const loginBtn = screen.getByRole("button", {name:"Login"})
    fireEvent.click(loginBtn);

    const logOutBtn = screen.getByRole("button",{name:"Logout"})
    expect(logOutBtn).toBeInTheDocument();
})

})