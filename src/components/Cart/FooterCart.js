import React, { useContext } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { CartShoppingContext } from '../../context/CartShoppingContext';

const FooterCart = () => {
    const { prices } = useContext(CartShoppingContext);

    return (
        <Box>
            {
                prices.map((price, i) => (
                    <Flex
                        key={i}
                        justifyContent='space-between'
                        fontSize='20px'
                        m='10px'
                    >
                        <Text
                            { ...price.otherStyles }
                        >
                            { price.text }
                        </Text>
                        <Text
                            { ...price.otherStyles }
                        >
                            ${ price.num }
                        </Text>
                    </Flex>
                ))
            }
        </Box>
    )
}

export default FooterCart