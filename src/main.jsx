import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/ui/Loader.jsx";
import ScrollTop from "./lib/ScrollTop.jsx";


createRoot(document.getElementById("root")).render(

    <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <ScrollTop />
          <App />
        </Suspense>
    </BrowserRouter>
 
);
