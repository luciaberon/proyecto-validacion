# Proyecto validación

En el proyecto de esta semana, vamos a simular la validación de la identidad de un usuario. Es una parte útil para bancos o empresas similares, en las que se necesita que el usuario suba a la plataforma su Documento de Indentidad, antes de poder operar.

Dividiremos el proyecto en varias fases:

**Fase 1.** El usuario se registra, indicando nombre completo, correo electrónico y contraseña.

**Fase 2.** Se muestra un onboarding al usuario, para que valide su identidad.

**Fase 3.** Al pulsar en validar identidad, el usuario irá a una página en la que hay un código QR para que continúe el proceso desde el móvil.

**Fase 4.** El usuario utiliza la cámara con el código QR y navega a una web responsive, en la que podrá adjuntar su documento de identidad por ambas partes.

**Fase 5.** El usuario visualiza en la web, desde su PC, ambas imágenes, subidas a través del móvil.

**Fase 6.** El usuario debe esperar hasta que se valide su cuenta, que se realizará por parte de la plataforma (usuario administrador).

En el **panel de administración** en se verá el estado de la validación de cada usuario y se podrán visualizar los documentos y decidir si se valida o rechaza al usuario.

**Consideraciones**: 

- Podéis usar [https://pqina.nl/filepond/](https://pqina.nl/filepond/) para la parte de subida de ficheros.
- Las imágenes se pueden almacenar en Amazon s3, cloudinary o Google Cloud.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

