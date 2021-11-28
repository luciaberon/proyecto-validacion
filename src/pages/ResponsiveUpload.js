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

import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { uploadImages } from "../services/axiosService";
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

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)



export default function ResponsiveUpload() {
  const navigate = useNavigate();
  // Para mandarlo al back asociado al id
  //Hacer fetch del usuario con ese id
  const { id_user } = useParams();
  const [files, setFiles] = useState(null);
  const [error, setError] = useState(null);
  let hiddenInput = null;

  const queryParams = new URLSearchParams(window.location.search);
  const username = queryParams.get('username');

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
      <Heading mb={6}>Bienvenido "NOMBRE"</Heading>
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
        
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={true}
          maxFiles={2}
          server={{
                process: {
                     url: "https://validacion-test.herokuapp.com/api/onboarding/dni",
                     ondata: (formData) => {
                      formData.append('username', username);
                      return formData;
                }}
          }}
          name="files"
          labelIdle='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
        />
      </form>
    </Flex>
  );
}
