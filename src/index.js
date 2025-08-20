import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Context from "./state/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
);
