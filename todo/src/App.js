import React from "react";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import TodoDetails from "./Components/TodoDetails/TodoDetails";


function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/todos" element={<Home/>}/>
        <Route path="/todos/:id" element={<TodoDetails/>}/>
      </Routes>
      </>
  );
}

export default App;
