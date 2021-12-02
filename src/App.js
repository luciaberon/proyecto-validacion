import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
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
import UserDashboard from './pages/UserDashboard';
import Onboarding from './pages/Onboarding';


function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isLoggedIn);
  console.log("AUTH",auth)
  useEffect(() => {
    console.log("checking")
    dispatch(checkLogged());
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Container p={10} mt={5} className="App">
        <Fonts />
        <HashRouter>
        <NavBar />
          <Switch>
            /// register
            <Route exact path="/" component={Home} auth={auth} />
            /// onboarding with validate identity button
            <Route exact path="/onboarding" component={Onboarding} />
            /// qr code
            <Route exact path="/validacion" component={Validation} auth={auth} />
            /// login
            <ProtectedAuth exact path="/iniciarsesion" component={SignIn} auth={auth} />
            // upload images
            <ProtectedRoute exact path="/validarusuario/:username" component={ResponsiveUpload} auth={auth} />
            // user panel
            <ProtectedRoute exact path="/panelusuario" component={UserDashboard} auth={auth} />
            /// admin panel
            <ProtectedRoute exact path="/paneladministracion" component={AdminDashboard} auth={auth}/>

            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </Container>
    </ChakraProvider>
  );
}

const ProtectedRoute = ({auth,component:Component,...rest}) => {  
  return (
    <Route
    {...rest}
    render={() => auth ? (
      <Component />
    ): 
      (
        <Redirect to="/iniciarsesion" />   
      )
    }
    />
  )
}

const ProtectedAuth = ({auth,component:Component,...rest}) => {
  const panel = localStorage.getItem('username') === 'Admin' ? 'paneladministracion' : 'panelusuario'
  return (
    <Route
    {...rest}
    render={() => !auth ? (
      <Component />
    ): 
      (
        <Redirect to={`/${panel}`} />   
      )
    }
    />
  )
}


export default App;