import React, { useEffect, useState } from "react";
import "./App.css";
import { StartButton } from "../components/StartButton";


export default function App() {

    const [DoShow, SetDoShow] = useState({element:<h1>Hi</h1>})
    
    
    return(
        <>
            { DoShow.element }
        </>
    )
};