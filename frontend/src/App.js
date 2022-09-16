import React, { useState } from "react";
import { 
    Routes, 
    Route, 
    Link 
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import StageManagerProfiles from "./Components/StageMgmtProfiles";
import BacklineLibrary from "./Components/BacklineLibrary";
import ArtistManagerForm from "./Components/ArtistManagerForm";
import BTSHome from "./Components/BTSHome";

const App = () => {

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<BTSHome />}/>
                <Route path="/ManagerForm" element={ <ArtistManagerForm /> }/>
                <Route path="/BacklineLibrary" element={ <BacklineLibrary /> }/>
                <Route path="/StageMgrProfiles" element={ <StageManagerProfiles />}/>
            </Routes>
        </div>
        
    )
}

export default App