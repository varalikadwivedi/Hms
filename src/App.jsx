import Login from "./Pages/Login";
import React, { useState } from 'react';
import './index.css'; 
export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
return (
<>{isLoggedIn?(
    <h1 className="text-center text-3xl mt-20 font-bold">Welcome to the Admin Page</h1>
):(<Login onLogin={()=>setIsLoggedIn(true)}/>)}

</>
);
}