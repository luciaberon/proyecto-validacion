import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../features/auth/authSlice";
import { Button, Heading, Text, Container, Avatar } from "@chakra-ui/react";

const Onboarding = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const setLogin = () => {
    setShow(true);
    setError(false);
    try {
      dispatch(
        login({
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        })
      ).then(res => {
        console.log("login done, redirect");
        history.push("/validacion");
      })
    } catch (e) {
      setError(true);
    }
  };
  const name = localStorage.getItem("name");

  return (
    <Container align="center">
            <Avatar bg="teal.500" size="xl" mb={5}/>

      {show && <Heading>LOGGED</Heading>}
      <Heading mb={5}>Gracias por registrarse {name} </Heading>
      <Text mb={5}>
        Para continuar, necesitamos que nos proporcione su documento de
        ideantidad. Por favor, siga los siguientes pasos:
      </Text>
      <Button colorScheme="teal" m={5} onClick={setLogin}>
        VALIDAR IDENTIDAD
      </Button>
      { error && <div>Error al procesar solicitud, intente nuevamente.</div>}
    </Container>
  );
};

export default Onboarding;
