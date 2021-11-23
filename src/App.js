import {BrowserRoute, Routes, Route} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Fonts from "../styles/fonts";
import Home from "./pages/Home"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Fonts />
        <BrowserRoute>
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
        </BrowserRoute>
      </div>{" "}
    </ChakraProvider>
  );
}

export default App;
