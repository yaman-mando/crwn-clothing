import React from "react";
import './cart-dropdown.style.scss'
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import UrlLinks from "../../interfaces/links.interface";
import {toggleCartHidden} from "../../redux/cart/cart.actions";


const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItems.id} item={cartItem}/>
                    ))
                    :
                    <span className='empty-card'>Card is empty!</span>
            }
            <CustomButton onClick={() => {
                history.push(UrlLinks.checkout);
                dispatch(toggleCartHidden())
            }
            }>GO TO CHECKOUT</CustomButton>
        </div>

    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));