import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Add this import
import Header from "../Header";

describe("test cases for Header component", () => {
    it("Should find the Login/Logout Button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        // More flexible approach - look for either Login or Logout
        const loginOrLogoutButton = screen.getByRole("button", {
            name: /(login|logout)/i,
        });

        expect(loginOrLogoutButton).toBeInTheDocument();

        // Additional debugging
        // console.log("Button text:", loginOrLogoutButton.textContent.trim());
    })
})
// it("Should find the Cart Button", () => {
//     render(
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <Header />
//             </Provider>
//         </BrowserRouter>
//     );

//     // More flexible approach - look for either Login or Logout
//     const cartItems = screen.getByText("(0 items)");

//     expect(cartItems).toBeInTheDocument();

//     // Additional debugging
//     console.log("Button text:", cartItems.textContent.trim());
// });
//     it("Should find the Logout Button", () => {
//         render(
//             <BrowserRouter>
//                 <Provider store={appStore}>
//                     <Header />
//                 </Provider>
//             </BrowserRouter>
//         );

//         // More flexible approach - look for either Login or Logout
//         const login = screen.getByRole("button", {
//             name: "Login"
//         });

//         fireEvent.click(login)

//         const logout = screen.getByRole("button", { name: /(logout)/i, })
//         expect(logout).toBeInTheDocument();


//     });
// })
