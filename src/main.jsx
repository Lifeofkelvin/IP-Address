import { createRoot } from "react-dom/client";
import {
  ChakraProvider,
  ColorModeProvider,
  extendTheme,
} from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </ChakraProvider>
);
