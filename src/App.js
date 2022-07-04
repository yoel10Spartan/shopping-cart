import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Cart from './components/Cart/Cart';
import './styles.css';
import { CartShoppingProvider } from './context/CartShoppingContext';

const App = () => {
    return (
        <ChakraProvider>
            <CartShoppingProvider>
                <Cart />
            </CartShoppingProvider>
        </ChakraProvider>
    )
}

export default App