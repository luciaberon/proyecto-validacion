import {
  Flex,
  Button,
  Text,
  Heading,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import axios from 'axios';
import ImageUploader from 'react-images-upload';
import http from '../utils/config/axios.config';
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { uploadPhotos } from "../services/axiosService";

// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { queryByAttribute } from "@testing-library/react";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)



export default function ResponsiveUpload() {
  const {token} = useParams();
  const history = useHistory();

  if(token !== null) {
    localStorage.setItem("user",token);
  }
  console.log("token",token)//123

  const [firstPic, setFirstPic] = useState();
  const [secondPic, setSecondPic] = useState();

  const upload = (e) => {
    e.preventDefault();
    console.log("photo1",firstPic);
    uploadPhotos(firstPic,secondPic);
    history.push('/panelusuario');
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

    </Flex>
    
  );
  
}
