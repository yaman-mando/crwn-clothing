import {CartActionTypes} from "./cart.type";


export const toggleCartHidden = () => ({
    type:CartActionTypes.toggle_cart_hidden,

});


export const addItem = item => ({
    type:CartActionTypes.add_item,
    payload:item
});


export const increaseItem = item => ({
    type:CartActionTypes.increase_item,
    payload:item
});

export const decreaseItem = item => ({
    type:CartActionTypes.decrease_item,
    payload:item
});


export const removeItem = item => ({
    type:CartActionTypes.remove_item_from_cart,
    payload:item
});

