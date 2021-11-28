import {
  HashRouter,
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
  console.log("AUTH",auth)
  useEffect(() => {
    dispatch(checkLogged());
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Container p={10} mt={5} className="App">
        <Fonts />
        <HashRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />}  auth={auth} />
            <Route path="/iniciarsesion" 
                   element={<SignIn />} auth={auth} />
            <Route 
              path="/validacion" 
              element={
                <RequireAuth auth={auth}>
                  <Validation />
                </RequireAuth>
              } 
            />
            <Route
              path="/paneladministracion"
              element={
                <RequireAuth auth={auth}>
                  <AdminDashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/validarusuario"
              element={<ResponsiveUpload />}
              auth={auth} 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </Container>
    </ChakraProvider>
  );
}

function RequireAuth({ children, auth }) {
  let isAuthenticated = auth;
  let userRole = localStorage.getItem('username');
  let route = userRole == "admin" ? "/paneladministracion" : "/validacion";  
  return isAuthenticated ? children : <Navigate to={route} />;
}

function CheckLogged({ children, redirectTo, auth }) {
  let isAuthenticated = auth;
  return !isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default App;
