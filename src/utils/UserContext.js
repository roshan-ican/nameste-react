import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: {
        name: "Dummy",
        email: "Dummy Email",
    },
});

export default UserContext;