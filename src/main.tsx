import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const contextData = {
  name: "ユーザー名",
  age: 20,
};

const ContextData = createContext(contextData);

createRoot(document.getElementById("root")!).render(
  <ContextData.Provider value={contextData}>
    <StrictMode>
      <App />
    </StrictMode>
  </ContextData.Provider>
);

export default ContextData;
