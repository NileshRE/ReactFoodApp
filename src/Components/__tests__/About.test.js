import { render, screen } from "@testing-library/react"
import Aboutus from "../Aboutus"
import "@testing-library/jest-dom"

test("Render About", ()=>{

    render(<Aboutus />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})