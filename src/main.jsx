import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import MainRoutes from "./routes";
import BasketProvider from "./context/BasketContext";
import ModalProvider from "./context/ModalContext";
import AuthProvider from "./context/AuthContext";
import LikeProvider from "./context/LikeContext";
import SearchContext from "./context/SearchContext"
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ChakraProvider>
      <SearchContext>
        <ModalProvider>
          <BasketProvider>
            <LikeProvider>
              <MainRoutes />
            </LikeProvider>
          </BasketProvider>
        </ModalProvider>
      </SearchContext>
    </ChakraProvider>
  </AuthProvider>
);
