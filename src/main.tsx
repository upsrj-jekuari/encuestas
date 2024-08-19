import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Main from "./components/layouts/Main.tsx";
import IndexRoutes from "./routes/index";
import Overlay from "./components/organisms/Overlay/Overlay";
import Alert from "./components/organisms/Alert/Alert";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main>
      <Overlay.Provider>
        <Alert.Provider>
          <IndexRoutes />
        </Alert.Provider>
      </Overlay.Provider>
    </Main>
  </StrictMode>,
);
