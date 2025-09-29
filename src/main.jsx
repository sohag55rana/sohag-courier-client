import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-urbanist container mx-auto bg-[#eaeced]">
      <RouterProvider router={router} />,
    </div>
  </StrictMode>
);
