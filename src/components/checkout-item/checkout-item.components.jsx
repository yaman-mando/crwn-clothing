import React from "react";
import './checkout-item.style.scss'
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import {connect} from "react-redux";
import {decreaseItem, increaseItem, removeItem} from "../../redux/cart/cart.actions";


const CheckoutItem = ({checkoutItem,dispatch}) => {
    const {imageUrl,name,price,quantity} = checkoutItem;
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <span className='decrease-arrow' onClick={() => dispatch(decreaseItem(checkoutItem))}>&#10094;</span>
            {quantity}
            <span className='increase-arrow' onClick={() => dispatch(increaseItem(checkoutItem))}>&#10095;</span>
        </span>
        <span className='price'>{price}</span>
        <span className='remove-button' onClick={() => dispatch(removeItem(checkoutItem))}>&#10005;</span>

    </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
});

export default connect(mapStateToProps)(CheckoutItem);