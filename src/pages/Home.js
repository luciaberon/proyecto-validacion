import React from "react";
import { Formik, Form } from 'formik';
import { register } from '../features/auth/authSlice';
import * as Yup from 'yup';
import Swal from 'sweetalert2'
import { useDispatch } from "react-redux";
import {
  Container,
  InputGroup,
  Button,
  IconButton,
  InputRightElement,
  InputLeftElement,
  Avatar,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  InputControl,
} from "formik-chakra-ui";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import UserDashboard from "./UserDashboard";

export default function Home() {

    const initialValues = {
        name: '',
        surname: '',
        email: '',
        username:'',
        password: '',
    }

    const registerSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(3, 'Nombre muy corto')
                .max(16, 'Nombre muy largo')
                .required('Nombre requerido'),
            surname: Yup.string()
                .min(3, 'Apellido muy corto')
                .max(16, 'Apellido muy largo')
                .required('Apellido requerido'),
            email: Yup.string()
                .email('Formato de email inválido')
                .required('Email requerido'),
            password: Yup.string()
                .min(8, 'Contraseña muy corta')
                .required('Contraseña requerida'),
            username: Yup.number()
                .min(8,'Número muy corto')
                .required('Número de documento requerido')
        }
    )

  const dispatch = useDispatch();

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

      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async(values) => {
          dispatch(register(values));
        }}
      >
      {({ values,
            touched,
            isSubmiting,
            handleChange,
            handleBlur }) => (

              <Form>
                  <InputControl id="name" name="name" 
                    mt={6}
                    variant="flushed"
                    type="text"
                    focusBorderColor="teal.500"
                    w="350px"
                    colorScheme="teal"
                    inputProps={{ placeholder: 'Nombre' }}
                  />

                  <InputControl id="surname" name="surname"
                    mt={6}
                    variant="flushed"
                    type="text"
                    placeholder="Apellidos"
                    colorScheme="teal"
                    w="350px"
                    focusBorderColor="teal.500"
                    inputProps={{ placeholder: 'Apellido' }}
                  />
                  <InputControl id="username" name="username" 
                    mt={6}
                    w="350px"
                    variant="flushed"
                    type="text"
                    placeholder="Número de documento"
                    colorScheme="teal"
                    focusBorderColor="teal.500"
                    inputProps={{ placeholder: 'Número de documento' }}
                  />

                <InputGroup>
                  <InputControl id="email" name="email" 
                    mt={6}
                    w="350px"
                    variant="flushed"
                    type="text"
                    placeholder="Email"
                    colorScheme="teal"
                    focusBorderColor="teal.500"
                    inputProps={{ placeholder: 'Correo electrónico' }}
                  />
                  <InputLeftElement
                    mt={6}
                    pointerEvents="none"
                    children={<EmailIcon color="teal" />}
                  />
                </InputGroup>

                <InputGroup>
                  <InputControl name="password" id="password"
                    mt={6}
                    focusBorderColor="teal.500"
                    variant="flushed"
                    w="350px"
                    inputProps={{ placeholder: 'Contraseña', type: show ? "text" : "password"}}
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
              </Form>
            )}
      </Formik>
    </Container>
  );
}
