import RestaurantCard from "../RestaurentCard"
import MOCK_DATA from "../../components/mocks/resCardMock.json"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import "@testing-library/jest-dom" // This line fixes the error

const customRender = (ui, options = {}) => {
    const Wrapper = ({ children }) => (
        <MemoryRouter {...options}>
            {children}
        </MemoryRouter>
    )
    
    return render(ui, { wrapper: Wrapper })
}

it("should render Restaurent card component with props Data", () => {
    customRender(<RestaurantCard resData={MOCK_DATA} />)

    const resName = screen.getByText("Burger King")

    expect(resName).toBeInTheDocument() // Now this will work
})
