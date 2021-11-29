import { Box, Heading, Flex, Img } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function UserDashboard() {
  const [user, setUser] = useState();
  useEffect(() => {
    const response = axios.get('')
  }, [])
  const userFalso = {
    name: "Fulanito",
    lastname: "Garcia",
    validate: true,
    img1: "https://www.diariodesevilla.es/2021/02/07/sociedad/gatos-pelo-conocias-razas_1545155550_133880457_667x375.png",
    img2: "https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067",
  };
  return (
    <Box mt={10}>
      <Heading size="lg">
        Bienvenido {userFalso.name} {userFalso.lastname}
      </Heading>
      <Flex direction="column" align="center" mt={5}>
        {" "}
        <Heading size="md">Documentos aportados</Heading>
        <Img m={3} src={userFalso.img1} alt={userFalso.name} />
        <Img m={3} src={userFalso.img2} alt={userFalso.name} />
      </Flex>

      {userFalso.validate === true && (
          <Heading size="md">Enhorabuena, su cuenta esta validada.</Heading>
      )}

{userFalso.validate === false && (
          <Heading size="md">Su cuenta será validada por un administrador proximamente.</Heading>
      )}
    </Box>
  );
}
