import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import { Toaster } from "sonner";
import { BsCheckCircleFill } from "react-icons/bs";
import { BiError } from "react-icons/bi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-center" icons={{success: <BsCheckCircleFill className="text-green-600 text-xl" />, error: <BiError className="text-red-600 text-xl" />}} />
    <RouterProvider router={routes} />
  </React.StrictMode>
);
