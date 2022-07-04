import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const CircleButton = ({ t, onClick }) => {
    return (
        <Flex
            onClick={() => onClick()}
            justifyContent='center'
            alignItems='center'
            bg='#AED6F1'
            w='30px'
            h='30px'
            borderRadius='50%'
            cursor='pointer'
            userSelect='none'
        >
            {t}
        </Flex>
    )
}

export default CircleButton