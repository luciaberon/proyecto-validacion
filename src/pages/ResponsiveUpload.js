import {
  Flex,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { uploadPhotos } from "../services/axiosService";

export default function ResponsiveUpload() {
  const { token } = useParams();
  const history = useHistory();

  if (token !== null) {
    localStorage.setItem("user", token);
  }

  const [firstPic, setFirstPic] = useState();
  const [secondPic, setSecondPic] = useState();

  const upload = (e) => {
    e.preventDefault();
    console.log("photo1", firstPic);
    uploadPhotos(firstPic, secondPic);
    history.push("/panelusuario");
  };

  const handleImg1 = () => {
    const pic = document.getElementById("photo1");
    const selectedFile = pic.files[0];
    setFirstPic(selectedFile);
  };

  const handleImg2 = () => {
    const pic = document.getElementById("photo2");
    const selectedFile = pic.files[0];
    setSecondPic(selectedFile);
  };
  const hiddenFileInput1 = React.useRef(null);
  const hiddenFileInput2 = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput1.current.click();
  };

  const handleClickBis = (event) => {
    hiddenFileInput2.current.click();
  };

  const types = ["image/png", "image/jpeg", "image/jpg"];

  return (
    <Flex direction="column" align="center" justify="center">
      <Heading mb={6}>Bienvenido</Heading>
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

      <form onSubmit={(e) => upload(e)}>
        <Button onClick={handleClick}>Seleccionar imagen</Button>
        <input
          type="file"
          ref={hiddenFileInput1}
          onChange={handleImg1}
          id="photo1"
          name="photo1"
          style={{ display: "none" }}
          required
        ></input>
        <Button onClick={handleClickBis}>Seleccionar imagen</Button>
        <input
          type="file"
          ref={hiddenFileInput2}
          onChange={handleImg2}
          id="photo2"
          name="photo2"
          style={{ display: "none" }}
          required
        ></input>
        <Button type="submit" colorScheme="teal">Enviar documentos</Button>
      </form>
    </Flex>
  );
}
