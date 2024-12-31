import { useState } from "react";
function HookExmp1() {
  const [name] = useState("Hello world");
  return <h1>{name}</h1>;
}
export default HookExmp1;
