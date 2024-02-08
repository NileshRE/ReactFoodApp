import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/ResMenuMock.json";

global.fetch=jest.fn(()=>Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA),
    })
);


test("Cart addition of items", async ()=>{
    await act(async ()=>render(
    <BrowserRouter>
    <RestaurantMenu />
    </BrowserRouter>
    ))

    test("show Restaurant Menu",()=>{
    
        const accorHeader = screen.getByText("Biryani(5)")
        fireEvent.click(accorHeader);
        
    })
})