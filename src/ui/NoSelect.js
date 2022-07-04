import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const NoSelect = ({ text }) => {
    return (
        <Flex
            w='100%'
            h='100%'
            justifyContent='center'
            alignItems='center'
        >
            <Text>
                { text }
            </Text>
        </Flex>
    )
}

export default NoSelect