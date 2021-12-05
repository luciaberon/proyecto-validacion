import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../features/auth/authSlice";
import { Button, Heading, Text, Container, Avatar } from "@chakra-ui/react";

const Onboarding = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const setLogin = () => {
    setShow(true);
    dispatch(
      login({
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
      })
    );
    console.log("login done, redirect");
    history.push("/validacion");
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
    </Container>
  );
};

export default Onboarding;
