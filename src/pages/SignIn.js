import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login, checkLogged } from "../features/auth/authSlice";
import {
  Container,
  Input,
  InputGroup,
  Button,
  IconButton,
  InputRightElement,
  InputLeftElement,
  Avatar,
  Heading,
  Text,
} from "@chakra-ui/react";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
  };
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
            placeholder="Email"
            colorScheme="teal"
            focusBorderColor="teal.500"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <InputRightElement
            mt={10}
            pointerEvents="none"
            children={<EmailIcon color="teal" />}
            mr={4}
          />
        </InputGroup>

        <InputGroup>
          <Input
            mt={6}
            focusBorderColor="teal.500"
            variant="flushed"
            type={show ? "text" : "password"}
            placeholder="Contraseña"
            {...register("Contraseña", { required: true })}
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
