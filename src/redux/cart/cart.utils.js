import {removeItem} from "./cart.actions";

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};


export const changeQuantityToItem = (cartItems, cartItemToChange, sign) => {
    if (cartItemToChange.quantity > 0)
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToChange.id ?
                sign === '+' ?
                    {...cartItem, quantity: cartItem.quantity + 1}
                    :
                    cartItem.quantity > 1 ?
                        {...cartItem, quantity: cartItem.quantity - 1}
                        :
                        cartItem
                : cartItem
        );
    else {
        //removeItem();
    }
};


/*
export const removeItem = (cartItems, cartItemToRemove) => {
    cartItems.map(cartItem => {
        if (cartItem.id === cartItemToRemove.id) {
            const index2 = cartItems.indexOf(cartItem);
            return cartItems.splice(index2, 1)
        } else {
            return cartItems
        }
    })
};*/
