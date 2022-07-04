import React, { useContext } from 'react';
import { Box, Flex, HStack, Text, } from '@chakra-ui/react';
import { BsTrash } from 'react-icons/bs';

import adjustText from '../../utils/adjustText.ts';
import CircleButton from '../../ui/CircleButton';
import { CartShoppingContext } from '../../context/CartShoppingContext';

const ProductCartItem = ({ id, item_name, short_description, quantity, price_without_tax }) => {
    const { 
        handleIncreaseProducts,
        handleDecreaseProducts,
        handleRemoveProduct 
    } = useContext(CartShoppingContext);
    
    return (
        <Flex
            flexDirection={[ 'column', 'column', 'row', 'row' ]}
        >
            <HStack
                minW='60%'
            >
                <Box 
                    bg='#E5E8E8'
                    w='70px'
                    h='70px'
                    borderRadius='20px'
                />
                <Box>
                    <Text
                        fontSize='18px'
                        fontWeight='600'
                    >
                        { adjustText(item_name, 15) }
                    </Text>
                    <Text
                        color='#99A3A4'
                    >
                        { adjustText(short_description, 16) }
                    </Text>
                </Box>
            </HStack>
            <HStack
                minW='40%'
                mt={['5px', '5px', 0, 0]}
            >
                <HStack
                    minW='50%'
                    justifyContent={['center', 'space-between']}
                >
                    <CircleButton 
                        t='+'
                        onClick={() => handleIncreaseProducts(id)}
                    />
                    <Text
                        fontWeight='600'
                    >
                        { quantity }
                    </Text>
                    <CircleButton 
                        t='-'
                        onClick={() => handleDecreaseProducts(id)}
                    />
                </HStack>
                <HStack
                    w='50%'
                    justifyContent={['center', 'center', 'end']}
                >
                    <Text
                        fontWeight='600'
                        fontSize='20px'
                    >
                        ${ price_without_tax }
                    </Text>
                    <BsTrash 
                        onClick={() => handleRemoveProduct(id, true)}
                    />
                </HStack>
            </HStack>
        </Flex>
    )
}

export default ProductCartItem