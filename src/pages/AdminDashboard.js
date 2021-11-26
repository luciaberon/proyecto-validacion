import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function AdminDashboard() {

    const adminFake = {
        username: 'Admin'
    }

    const userFakes =  [
        {
            username: "54537689P",
            name: "Fulano",
            lastname: "Smith",
            img1: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
            img2: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
            validate: false
        },
        {
            username: "54677689P",
            name: "Menganito",
            lastname: "Fernandez",
            img1: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
            img2: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
            validate: true
        },
        {
            username: "54347689P",
            name: "Manolito",
            lastname: "Garcia",
            img1: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
            img2: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
            validate: false
        },
        {
            username: "55647689P",
            name: "Pepe",
            lastname: "Gotera",
            img1: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
            img2: "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
            validate: true
        }

    ]

    const noValidates = userFakes.filter((user) => user.validate === false);
    const validates = userFakes.filter((user) => user.validate === true);
 console.log(noValidates);
    return (
        <Flex direction="column" align="center">
            <Heading>Bienvenido {adminFake.username}</Heading>

            <Text>Tenemos {noValidates.length} usuarios por validar</Text>

            <Box direction="column" align="center" borderWidth="1px" borderRadius="lg">
                
            </Box>
        </Flex>
    )
}
