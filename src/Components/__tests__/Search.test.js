import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../../Components/Body";
import MOCK_DATA from "../mocks/ReslistMock.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


//Mocking a fetch function or API call

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
           return Promise.resolve(MOCK_DATA);
        }
    })
})

describe("Search and filter function check",()=>{

test("check for search results", async ()=>{
    await act(async ()=>render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>
    ));

    const cards = screen.getAllByTestId("Rescard");

    expect(cards.length).toBe(20);

    const srchBtn = screen.getByRole("button", {name:"Search"})
    expect(srchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput,{target: {value:"burger"}})

    fireEvent.click(srchBtn);
 
    const upCards = screen.getAllByTestId("Rescard")
    expect(upCards.length).toBe(1);
});

test("check top rated filtered restaurant", async ()=>{
    await act(async ()=>render(
        <BrowserRouter>
        <Body />
        </BrowserRouter>
    ));
        const filter = screen.getByRole("button",{name:"Top Rated"})
        expect(filter).toBeInTheDocument();

        fireEvent.click(filter);

        const cards = screen.getAllByTestId("Rescard");
        expect(cards.length).toBe(6);
})


});