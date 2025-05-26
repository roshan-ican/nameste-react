import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_REST_LIST from "../../components/mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_REST_LIST);
        },
    });
});

it("Should render the body component with search", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );
    const cards = screen.getAllByTestId("resCard")

    expect(cards.length).toBe(8)

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, { target: { value: "burger" } })

    fireEvent.click(searchBtn)

    const cardsAfterSearch = screen.getAllByTestId("resCard")

    expect(cardsAfterSearch.length).toBe(1)

});


it("Should render the top rated restaurants with search", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );
    const cardsBeforeFilter = screen.getAllByTestId("resCard")

    expect(cardsBeforeFilter.length).toBe(8)

    const topRatedButton = screen.getByRole("button", { name: "Top Rated" })

    fireEvent.click(topRatedButton)

    const clickAfterFilter = screen.getAllByTestId("resCard")
    expect(clickAfterFilter.length).toBe(3)




});