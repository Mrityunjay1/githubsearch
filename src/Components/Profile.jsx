import React from 'react'
import {Box,Avatar,Heading} from '@chakra-ui/react'

export default function Profile({name,image,bio}) {
    return (
        <Box>
        <Box><Avatar name={name} src={image} size="2xl"/></Box>
            <Heading>{name}</Heading>   
            <Box>{bio}</Box>
        </Box>
    )
}
