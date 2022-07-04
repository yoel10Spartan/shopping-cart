import React, { createContext, useEffect, useState } from "react";
import data from '../data.json';

export const CartShoppingContext = createContext();

export const CartShoppingProvider = ({ children }) => {

    const [products, setProducts] = useState(data);
    const [totalProducts, setTotalProducts] = useState(0);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        let subtotal = 0;
        let taxes = 0;
        let shippingFees = 0;
        let totalProductsCount = 0;
        
        products.map(({ price_without_tax, quantity, tax, shipping_fee }) => {
            subtotal+=(price_without_tax * quantity);
            taxes+=(tax * quantity);
            shippingFees+=(shipping_fee * quantity);
            totalProductsCount+=quantity;
            return true
        });
        
        let total = (subtotal + shippingFees + taxes);
        setPrices(
            [
                { text: 'Subtotal', num: subtotal },
                { text: 'Shipping fees', num: shippingFees },
                { text: 'Taxes', num: taxes },
                { text: 'Total (including tax)', num: total, otherStyles: { fontWeight: 600 } }
            ]
        );
        setTotalProducts(totalProductsCount);
    }, [totalProducts, products]);

    const handleRemoveAll = () => {
        setProducts([]);
        setTotalProducts(0);
    };

    const handleChangeQuantity = (id, products, action='+') => {
        return products.filter(product => (
            product.id === id 
                ? { ...product, quantity: action === '+' ? product.quantity+=1 : product.quantity-=1 } 
                : product 
        ));
    }

    const handleRemoveProduct = (id, verify=false) => {
        setProducts(products => products.filter(product => (
            product.id !== id || (verify && (product.quantity === 0)) ? product : null
        )));
    }

    const handleIncreaseProducts = (id) => {
        setProducts(products => handleChangeQuantity(id, products));
        setTotalProducts(total => total+=1);
    }

    const handleDecreaseProducts = (id) => {
        setProducts(products => handleChangeQuantity(id, products, '-'));
        handleRemoveProduct(id);
        setTotalProducts(total => total-=1);
    }

    const values = {
        products, 
        prices,
        setProducts,
        handleRemoveAll,
        handleIncreaseProducts,
        handleDecreaseProducts,
        handleRemoveProduct
    }

    return (
        <CartShoppingContext.Provider value={values}>
            { children }
        </CartShoppingContext.Provider>
    )
}