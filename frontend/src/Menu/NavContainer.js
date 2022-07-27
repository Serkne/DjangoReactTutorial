import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes
} from "react-router-dom";
import HomePage from "../components/HomePage";
import CreateRoomPage from "../components/CreateRoomPage";
import RoomJoinPage from "../components/RoomJoinPage";
import React from "react";

function NavContainer() {
    return (
        <Router>
            <Routes>
                <Route exact path="/home" element={<HomePage/>} />
                <Route exact path="/create" element={<CreateRoomPage/>} />
                <Route exact path="/join" element={<RoomJoinPage/>} />
                <Route path='*' element={<Navigate replace to='/home' />} />
            </Routes>
        </Router>
    )
}

export default NavContainer