import ResCard from "../ResCard"
import Mock_Data from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

it("render rescard with props",()=>{
    render(<ResCard resList={Mock_Data} />)

   const name= screen.getByRole("heading");

   expect(name).toBeInTheDocument();
})