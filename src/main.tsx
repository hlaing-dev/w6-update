import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import "@arco-design/mobile-react/dist/style.css";
import setRootPixel from "@arco-design/mobile-react/tools/flexible";

setRootPixel();

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
