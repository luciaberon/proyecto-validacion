import { Box, Heading, Flex, Img } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getUser } from "../services/axiosService";

export default function UserDashboard() {
  const [user, setUser] = useState();
  useEffect(async() => {
    const response = await getUser();
    console.log("Response to getUser(): ", response.data.user);
    setUser(response.data.user)
  }, [])

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
        <Img m={3} src={user.urlDni1} alt="img2" />
        <Img m={3} src={user.urlDni2} alt="img2"/>
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
