import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { login } from "../features/auth/authSlice";
import { useHistory, Link } from "react-router-dom";
import {
  Container,
  Input,
  InputGroup,
  Button,
  IconButton,
  InputRightElement,
  Avatar,
  Heading,
  Text,
} from "@chakra-ui/react";
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(login(data))
    let role = localStorage.getItem('username');
    if (role === "admin") {
      history.push('/paneladministracion');
    } else {
      history.push('/panelusuario');
    }
  }
  console.log(errors);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Container
      centerContent
      display="flex"
      direction="column"
      justify="center"
      align="center"
    >
      <Avatar bg="teal.500" size="xl" />
      <Heading as="h1" mt={3}>
        Bienvenido
      </Heading>
      <Text as="h3" size="md">
        Inicie sesión o{" "}
        <Link to="/" passHref={true}>
          regístrese
        </Link>
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Input
            mt={10}
            minW="40ch"
            variant="flushed"
            type="text"
            placeholder="Documento de identidad"
            colorScheme="teal"
            focusBorderColor="teal.500"
            {...register("username", { required: true })}
          />
          <InputRightElement
            mt={10}
            pointerEvents="none"
            children={<LockIcon color="teal" />}
            mr={4}
          />
        </InputGroup>

        <InputGroup>
          <Input
            mt={6}
            focusBorderColor="teal.500"
            variant="flushed"
            type={show ? "text" : "password"}
            placeholder="password"
            {...register("password", { required: true })}
          />
          <InputRightElement mt={6} width="4.5rem">
            <IconButton
              colorScheme="teal"
              h="1.75rem"
              size="sm"
              onClick={handleClick}
            >
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </IconButton>
          </InputRightElement>
        </InputGroup>
        <Button colorScheme="teal" mt={10} type="submit">
          {" "}
          Enviar{" "}
        </Button>
      </form>
    </Container>
  );
}
