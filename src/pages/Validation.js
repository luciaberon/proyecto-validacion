import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import QRCode from "react-qr-code";

const userFalso = {
  id: 1,
  nombre: "Fulano",
  apellido: "Fulanito",
  validationUrl: "http://google.es",
};


export default function Validation() {
    const username = localStorage.getItem('username');
    const QRURL = `https://luciaberon.github.io/proyecto-validacion/#/validarusuario?${username}`;
    return (
      <Flex direction="column" align="center">
        <Heading size="md">Gracias por registrarse {userFalso.nombre}</Heading>
        <Text>
          Para continuar con el proceso, necesitamos que valide su identidad.
        </Text>
        <Text mt={6}>
          Escanee el siguiente código QR con su telefono para continuar:
        </Text>
        <Box mt={6}>
          <QRCode value={QRURL} />
        </Box>
      </Flex>
  );
}
