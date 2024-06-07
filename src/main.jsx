import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/index.css";
import App from "./App";
import { store } from "./feature/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
