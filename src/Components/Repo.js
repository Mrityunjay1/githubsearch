import React from 'react'
import {Box,Heading,Link} from '@chakra-ui/react'

export default function Repo({name,description,html_url,watchers_count}) {
    return (
        <Box padding={3} border={'1px solid'} boxShadow={'0 5px 5px 0 rgba(0,0,0,0.3)'} borderRadius={4}>
            <Heading as="h3">{name}</Heading>
            <Box>{description}</Box>
            <Link isExternal href={html_url}>view repo</Link>
            <Box>{watchers_count}watchers</Box>
        </Box>
    )
}
