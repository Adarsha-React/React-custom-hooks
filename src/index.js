import React from "react";
import ReactDOM from "react-dom/client";
import FetchData from "./components/FecthData";

const AppLayout = () => {
  return (
    <div>
      <FetchData />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
