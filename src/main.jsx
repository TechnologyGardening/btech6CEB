import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import MyCustButton from "./lec3112/purefunc2";
import HookExmp1 from "./lec3112/hookexmp1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <MyCustButton />
    <br />
    <MyCustButton var1={true} />
    <br />
    <MyCustButton var2={"6CEB"} />
    <br />
    <MyCustButton var1={true} var2={"BTech"} /> */}
    <HookExmp1 />
  </StrictMode>
);
