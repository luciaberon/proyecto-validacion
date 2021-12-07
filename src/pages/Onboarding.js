import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../features/auth/authSlice";
import axios from "axios";
import { Button, Heading, Text, Container } from "@chakra-ui/react";

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
    <Container>
      {show && <Heading>LOGGED</Heading>}
      <Heading>Gracias por registrarse {name} </Heading>
      <Text>
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
