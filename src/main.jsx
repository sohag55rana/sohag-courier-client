import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./contexts/AuthContext/AuthProvider.jsx";

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-urbanist container mx-auto bg-[#eaeced]">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>
);
