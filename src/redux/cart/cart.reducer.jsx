import {CartActionTypes} from "./cart.type";
import {addItemToCart, changeQuantityToItem,removeItem} from "./cart.utils";

const INITIAL_STATE = {
    hidden:true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE,action) =>{
    switch (action.type) {
        case CartActionTypes.toggle_cart_hidden:
            return{
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.add_item:
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            };
        case CartActionTypes.decrease_item:
            return {
                ...state,
                cartItems:changeQuantityToItem(state.cartItems,action.payload,'-')
            };
        case CartActionTypes.increase_item:
            return {
                ...state,
                cartItems:changeQuantityToItem(state.cartItems,action.payload,'+')
            };
        case CartActionTypes.remove_item_from_cart:
            return {
                ...state,
                cartItems:state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };
        default:
            return state;

    }
};

export default cartReducer;