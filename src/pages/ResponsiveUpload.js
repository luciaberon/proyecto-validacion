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
import http from '../utils/config/axios.config';
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

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
  const {username} = useParams();
  const history = useHistory();
  // Para mandarlo al back asociado al id
  //Hacer fetch del usuario con ese id
  const [files, setFiles] = useState(null);
  const [error, setError] = useState(null);
  const [id,setId] = useState();

  useEffect(() => {
    const response = http.get(`/onboarding/${username}`);
    console.log("RESPONSE",response);
    setId(response.id);
  }, [])

  const [confirm, setConfirm] = useState(false);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  console.log("username uplaod page", username);
  return (
    <> 
    { !confirm ?
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
      <form>
        
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={true}
          maxFiles={2}
          server={{
                process: {
                    url: "https://validacion-test.herokuapp.com/api/onboarding/dni",
                    headers: {
                      Authorization: 'Bearer ' + localStorage.getItem('user')
                    },
                    ondata: (formData) => {
                      formData.append('username', username);
                      formData.append('id',id);
                      return formData;
                      },
                    onload: () => {
                      setConfirm(true);
                    }
              }
          }}
          name="files"
          labelIdle='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
        />
      </form>
    </Flex>
    : 'Imágenes subidas. Espere a la validación por parte del administrador'}
    </>
  );
}
