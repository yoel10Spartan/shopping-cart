import React, { useContext } from 'react';
import { Button, Flex, HStack, Text } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartShoppingContext } from '../../context/CartShoppingContext';

const HeaderCart = () => {
    const { handleRemoveAll } = useContext(CartShoppingContext);

    return (
        <Flex
            justifyContent='space-between'
            m={['10px 0', '20px 0']}
        >
            <HStack
                spacing='10px'
            >
                <AiOutlineShoppingCart size='30' />
                <Text
                    fontWeight='600'
                >
                    Order summary
                </Text>
            </HStack>
            <Button
                color='#99A3A4'
                bg='transparent'
                fontWeight='0'
                _hover={{
                    bg: 'transparent'
                }}
                padding='0'
                onClick={() => handleRemoveAll()}
            >
                Remove All
            </Button>
        </Flex>
    )
}

export default HeaderCart