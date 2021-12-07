import {
  Flex,
  Text,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ResetButton } from "formik-chakra-ui";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { uploadPhotos } from "../services/axiosService";

export default function ResponsiveUpload() {
  const {token} = useParams();
  const history = useHistory();

  if(token !== null) {
    localStorage.setItem("user",token);
  }

  const [firstPic, setFirstPic] = useState();
  const [secondPic, setSecondPic] = useState();
  const [error, setError] = useState(false);

  const upload = async(e) => {
    e.preventDefault();
    setError(false);
    console.log("photo1",firstPic);
    try {
      const res = await uploadPhotos(firstPic,secondPic);
      history.push('/panelusuario');
    } catch (e) {
      setError(true);
    }
   
  }

  const handleImg1 = () => {
    const pic = document.getElementById("photo1");
    const selectedFile = pic.files[0];
    setFirstPic(selectedFile);
  }

  const handleImg2 = () => {
    const pic = document.getElementById("photo2");
    const selectedFile = pic.files[0];
    setSecondPic(selectedFile);
  }

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
        <input type="file" onChange={handleImg1} id="photo1" name="photo1" required></input>
        <input type="file" onChange={handleImg2} id="photo2" name="photo2" required></input>
        <input type="submit" value="ENVIAR FOTOS"></input>

      </form>
      
      { 
          error && <div>Error al cargar las imágenes, intente nuevamente.</div> 
      }

    </Flex>
    
  );
  
}
