import {
  Flex,
  Box,
  Heading,
  Text,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Image,
  Button,
} from "@chakra-ui/react";
import React from "react";

//TODOO VALIDAR DOCUMENTOS
//TODOO ANULAR VALIDACION

export default function AdminDashboard() {
  // Fetch users and admin
  const adminFake = {
    username: "Admin",
  };

  const userFakes = [
    {
      id: 1,
      username: "54537689P",
      name: "Fulano",
      lastname: "Smith",
      img1: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
      img2: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
      validate: false,
    },
    {
      id: 2,
      username: "54677689P",
      name: "Menganito",
      lastname: "Fernandez",
      img1: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
      img2: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
      validate: true,
    },
    {
      id: 3,
      username: "54347689P",
      name: "Manolito",
      lastname: "Garcia",
      img1: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
      img2: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
      validate: false,
    },
    {
      id: 4,
      username: "55647689P",
      name: "Pepe",
      lastname: "Gotera",
      img1: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
      img2: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
      validate: true,
    },
  ];

  //Filter users
  const noValidates = userFakes.filter((user) => user.validate === false);
  const validates = userFakes.filter((user) => user.validate === true);
  console.log(noValidates);

  //Images Alert

  return (
    <Flex direction="column" align="center">
      <Heading>Bienvenido {adminFake.username}</Heading>
      <Text>Tenemos {noValidates.length} usuarios por validar</Text>
      <Box direction="column" align="center" mt={20}>
        {!noValidates.length && (
          <Container>
            <Text>¡Enhorabuena! No quedan usuarios por validar.</Text>
          </Container>
        )}
        {noValidates.map((noValidate) => {
          return (
            <Box>
              <Heading size="lg" mb={3} mt={3}>
                {noValidate.name} {noValidate.lastname}
              </Heading>
              <Accordion allowToggle minW="50rem">
                <AccordionItem borderColor="teal" focusColor="teal">
                  <h2>
                    <AccordionButton focusColor="teal">
                      <Box flex="1" textAlign="left">
                        <Text fontSize="lg">Documentos aportados</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel justify="center" pb={4}>
                    <Box display="flex">
                      {" "}
                      <Image
                        src={noValidate.img1}
                        alt={noValidate.name}
                        cursor="pointer"
                        w="350px"
                        m={2}
                      />
                      <Image
                        src={noValidate.img2}
                        alt={noValidate.name}
                        cursor="pointer"
                        w="350px"
                        m={2}
                      />
                    </Box>

                    <Button colorScheme="teal" m={4}>
                      Validar documentos
                    </Button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          );
        })}{" "}
      </Box>

      <Box direction="column" align="center" mt={20}>
        <Heading size="md">
          Tenemos {validates.length} usuarios validados hasta ahora
        </Heading>
        {!noValidates.length && (
          <Container>
            <Text>¡Parece que no hay usuarios validados!</Text>
          </Container>
        )}
        {validates.map((validate) => {
          return (
            <Box>
              <Heading size="lg" mb={3} mt={3}>
                {validate.name} {validate.lastname}
              </Heading>
              <Accordion allowToggle minW="50rem">
                <AccordionItem borderColor="teal" focusColor="teal">
                  <h2>
                    <AccordionButton focusColor="teal">
                      <Box flex="1" textAlign="left">
                        <Text fontSize="lg">Documentos aportados</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel justify="center" pb={4}>
                    <Box display="flex">
                      {" "}
                      <Image
                        src={validate.img1}
                        alt={validate.name}
                        cursor="pointer"
                        w="350px"
                        m={2}
                      />
                      <Image
                        src={validate.img2}
                        alt={validate.name}
                        cursor="pointer"
                        w="350px"
                        m={2}
                      />
                    </Box>

                    <Button colorScheme="teal" m={4}>
                      Anular validación
                    </Button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          );
        })}{" "}
      </Box>
    </Flex>
  );
}
