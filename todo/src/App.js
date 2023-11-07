import React from "react";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import TodoDetails from "./Components/TodoDetails/TodoDetails";
import { useThemeContext } from "./Context/ThemeContext";

function App() {
  const { toggleThemeFunction } = useThemeContext();

  return (
    <div className="dark:bg-[#1e1e1e] dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Home />} />
          <Route path="/todos/:id" element={<TodoDetails />} />
        </Routes>
        
      <button
        type="button"
        className={`rounded-md shadow-md absolute top-20 right-20 dark:bg-[#1e1e1e] dark:text-white p-2`}
        onClick={toggleThemeFunction}
      >
        toggle theme
      </button>
    </div>
  );
}

export default App;
