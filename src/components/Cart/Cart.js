import React from 'react';
import { Box, Center, Container, Divider } from '@chakra-ui/react';
import HeaderCart from './HeaderCart';
import ProductCartContainer from '../Products/ProductCartContainer';
import FooterCart from './FooterCart';

const Cart = () => {

    return (
        <Center
            h='100vh'
            w='100vw'
        >
            <Box
                bg='#F4F6F6'
                borderRadius='10px'
                h='95%'
                w={[ '100%', '80%', '70%', '50%', '40%' ]}
            >
                <Container
                    maxW='500px'
                >
                    <HeaderCart />
                    
                    <ProductCartContainer />

                    <Divider 
                        m='20px 0'
                    />

                    <FooterCart />
                </Container>
            </Box>
        </Center>
    )
}

export default Cart