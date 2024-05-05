import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterIndex from "./routes";

function App() {
  return (
    <div>
      <BrowserRouter>
       <RouterIndex/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
