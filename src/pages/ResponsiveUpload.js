import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Flex,
  Button,
  Text,
  Heading,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ResponsiveUpload() {
  const userFalso = {
    id: 1,
    nombre: "Fulano",
    apellido: "Fulanito",
    validationUrl: "http://google.es",
  };

  const navigate = useNavigate();
  // Para mandarlo al back asociado al id
  //Hacer fetch del usuario con ese id
  const { id_user } = useParams();
  const [files, setFiles] = useState(null);
  const [error, setError] = useState(null);
  let hiddenInput = null;

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const handleChange = (e) => {
    let selectedFiles = e.target.files[0];

    if (selectedFiles) {
      if (types.includes(selectedFiles.type)) {
        setError(null);
        setFiles(selectedFiles);
      } else {
        setFiles(null);
        setError("Por favor sube tus imagenes (png o jpg)");
      }
    }
  };
  return (
    <Flex direction="column" align="center" justify="center">
      <Heading mb={6}>Bienvenido {userFalso.nombre}</Heading>
      <Text align="center">
        Para finalizar tu registro, necesitamos que subas tu documento de
        identidad. Ten en cuenta lo siguiente, por favor:
      </Text>
      <UnorderedList centerContent mt={4} mb={10}>
        <ListItem>Solo aceptamos imagenes en formato jpeg o png</ListItem>
        <ListItem>Deben ser dos fotografias (anverso y reverso)</ListItem>
        <ListItem>
          Tu cuenta no estará activada hasta que el administrador no valide tus
          documentos
        </ListItem>
      </UnorderedList>
      <form>
        <Button onClick={() => hiddenInput.click()}>Subir imagenes</Button>
        <input
          hidden
          name="file"
          type="file"
          ref={(el) => (hiddenInput = el)}
          onChange={(e) => handleChange}
          multiple
        />
      </form>
      {/* NO FUNCIONA, CREO QUE HAY QUE GUARDARLAS EN LOCALSTORAGE 
      la idea es previsualizar las imagenes y borrarlas si no son correctas
      para poder volverlas a subir*/}
      {files && files.map((file) => <Image scr={file} />)}{" "}
      <Button colorScheme="teal" mt={10}>
        Enviar documentos
      </Button>
    </Flex>
  );
}
