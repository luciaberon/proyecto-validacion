import { Box, Heading, Flex, Img } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getUser } from "../services/axiosService";

export default function UserDashboard() {
  const [user, setUser] = useState();
  useEffect(() => {
    const response = getUser();
    console.log("Response to getUser(): ", response);
    setUser(response)
  }, [])
  const userFalso = {
    name: "Fulanito",
    lastname: "Garcia",
    validate: true,
    img1: "https://www.diariodesevilla.es/2021/02/07/sociedad/gatos-pelo-conocias-razas_1545155550_133880457_667x375.png",
    img2: "https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067",
  };
  return (
    <div>
      {user &&
    <Box mt={10}>
      <Heading size="lg">
        Bienvenido {user.name} {user.surname}
      </Heading>
      <Flex direction="column" align="center" mt={5}>
        {" "}
        <Heading size="md">Documentos aportados</Heading>
        <Img m={3} src={user.img1} alt="img2" />
        <Img m={3} src={user.img2} alt="img2"/>
      </Flex>

      {user.validate === true && (
          <Heading size="md">Enhorabuena, su cuenta esta validada.</Heading>
      )}

      {user.validate === false && (
          <Heading size="md">Su cuenta será validada por un administrador proximamente.</Heading>
      )}      
    </Box>
    }
    </div>
  );
}
