import React from "react";
import {createRoot} from "react-dom/client";
import NavContainer from "./Menu/NavContainer";

function App () {
    return (
        <div>
            <NavContainer />
        </div>
    );
}

const appDiv = document.getElementById("app");
const appRoot = createRoot(appDiv)
appRoot.render(<App />);

export default App;