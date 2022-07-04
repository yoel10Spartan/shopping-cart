import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { CartShoppingContext } from '../../context/CartShoppingContext';
import NoSelect from '../../ui/NoSelect';
import ProductCartItem from './ProductCartItem';

const ProductCartContainer = () => {
    const { products } = useContext(CartShoppingContext);

    const allProducts = (
        products.map(product => (
            <Box
                key={product.id}
                m='10px 0'
            >
                <ProductCartItem
                    key={product.id}
                    {...product}
                />
            </Box>
        ))
    )

    return (
        <Box
            h={['370px', '370px', '320px']}
            overflowY={products.length > 4 ? 'scroll' : 'hidden'}
        >
            { 
                products.length === 0 
                    ? <NoSelect text='NO PRODUCTS ADDED' /> 
                    : allProducts 
            }
        </Box>
    )
}

export default ProductCartContainer