import App from "./App";
import { createRoot } from "react-dom/client";

//
// Injection Script
//

// Insert the extension as the first child of the body
const domNode = document.createElement("div");
document.body.insertBefore(domNode, document.body.firstChild);
const root = createRoot(domNode);
root.render(<App />);
