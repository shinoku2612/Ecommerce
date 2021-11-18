import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { checkoutSuccess } from '../redux/cartRedux';

export default function PayPal() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const history = useHistory();

    const paypal = useRef();
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            amount: {
                                currency_code: "USD",
                                value: cart.total,
                                breakdown: {
                                    item_total: {
                                        currency_code: "USD",
                                        value: cart.total
                                    }
                                }
                            },
                            items: cart.products.map(product => {
                                return {
                                    name: product.title,
                                    unit_amount: {
                                        currency_code: "USD",
                                        value: product.price
                                    },
                                    quantity: product.quantity
                                }
                            })
                        }
                    ]
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                // console.log(order, data);
                history.push("/success", {
                    PayPalData: order,
                    products: cart
                })
                dispatch(
                    checkoutSuccess()
                );
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current);
    }, [cart, cart.products, dispatch, history]);
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}
