import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { register, checkLogged } from "../features/auth/authSlice";
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
import { PhoneIcon, EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Home() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(register(data));
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
        Introduzca sus datos para realizar el registro
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          mt={6}
          variant="flushed"
          type="text"
          placeholder="Nombre"
          focusBorderColor="teal.500"
          colorScheme="teal"
          {...register("firstname", { required: true, maxLength: 20 })}
        />
        <Input
          mt={6}
          variant="flushed"
          type="text"
          placeholder="Apellidos"
          colorScheme="teal"
          focusBorderColor="teal.500"
          {...register("lastname", { required: true, maxLength: 100 })}
        />
        <InputGroup>
          <Input
            mt={6}
            variant="flushed"
            type="text"
            placeholder="Email"
            colorScheme="teal"
            focusBorderColor="teal.500"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <InputLeftElement
            mt={6}
            pointerEvents="none"
            children={<EmailIcon color="teal" />}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            mt={6}
            pointerEvents="none"
            children={<PhoneIcon color="teal" />}
          />
          <Input
            mt={6}
            variant="flushed"
            type="tel"
            colorScheme="teal"
            focusBorderColor="teal.500"
            placeholder="Número de teléfono"
            {...register("mobilenumber", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
        </InputGroup>
        <InputGroup>
          <Input
            mt={6}
            focusBorderColor="teal.500"
            variant="flushed"
            type={show ? "text" : "password"}
            placeholder="Contraseña"
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
        {errors.message && errors.message.message}

        <Button colorScheme="teal" mt={10} type="submit">
          {" "}
          Enviar{" "}
        </Button>
      </form>
    </Container>
  );
}
