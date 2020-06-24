import React from "react";
import './checkout.style.scss'
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import {connect} from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({cartItems,total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-block'>
                <span>Product</span>
            </div>
            <div className='checkout-block'>
                <span>Description</span>
            </div>
            <div className='checkout-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout-block'>
                <span>Price</span>
            </div>
            <div className='checkout-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem =>

            <CheckoutItem key={cartItem.id} checkoutItem={cartItem}/>

        )}
        <div className='total'>
            <span>TOTAL:${total}</span>
        </div>
        <p className='test-payment-note'>For Test Payment Use: 4242-4242-4242-4242	CVC:222 and any Date</p>
        <StripeCheckoutButton price={total}/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage)