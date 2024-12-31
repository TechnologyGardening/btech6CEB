import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Component1 from "./lec2412/component1";
import HtmlComponent from "./lec2412/htmlcomp";

// 1. Class based implementation
// 2. Functional implementation
// JSX JavaScript XML
// <DIV> <div>
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Component1 /> */}
    <HtmlComponent />
  </StrictMode>
);
