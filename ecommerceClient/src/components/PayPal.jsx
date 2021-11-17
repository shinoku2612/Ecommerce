import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

export default function PayPal() {
    const cart = useSelector(state => state.cart);
    const paypal = useRef();
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Your course",
                            amount: {
                                currency_code: "USD",
                                value: cart.total
                            }
                        }
                    ]
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order)
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current);
    }, []);
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}
