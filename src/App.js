import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { checkLogged } from "./features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";

import theme from "./styles/theme";
import Fonts from "./styles/fonts";
import Home from "./pages/Home.js";
import NavBar from "./pages/NavBar";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import Validation from "./pages/Validation";
import AdminDashboard from "./pages/AdminDashboard";
import ResponsiveUpload from "./pages/ResponsiveUpload";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    dispatch(checkLogged());
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Container p={10} mt={5} className="App">
        <Fonts />
        <NavBar />
        <BrowserRouter>
          <Routes>
            <ProtectedAuth path="/" element={<Home />} />
            <ProtectedAuth path="/iniciarsesion" element={<SignIn />} />
            <ProtectedAuth path="/validacion" element={<Validation />} />
            <ProtectedAuth
              path="/paneladministracion"
              element={<AdminDashboard />}
            />
            <ProtectedAuth
              path="/validacion:id_user"
              element={<ResponsiveUpload />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ChakraProvider>
  );
}

const ProtectedRoute = ({ auth, element: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Component /> : <Navigate replace to="/login" />)}
    />
  );
};

const ProtectedAuth = ({ auth, element: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (!auth ? <Component /> : <Navigate replace to="/pagina" />)}
    />
  );
};

export default App;
