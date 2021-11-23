import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";


import theme from "./styles/theme";
import Fonts from "./styles/fonts";
import Home from "./pages/Home.js"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container mt={10} className="App">
        <Fonts />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        </BrowserRouter>
      </Container>
    </ChakraProvider>
  );
}

export default App;
