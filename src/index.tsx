import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const baseURL = new URL(
  "https://getlens-master.s.dev.family/api/pages/obektivy"
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
