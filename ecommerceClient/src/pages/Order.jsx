import React, { useEffect, useState } from 'react';
import { userRequest } from "../requestMethods";
import { useSelector } from 'react-redux';
import '../assets/custom.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { format } from 'timeago.js';
import { useHistory } from 'react-router';

const Button = ({ type }) => {
    return <button className={`status-btn ${type}`}> {type}</button >
};

const Order = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const userId = currentUser?._id;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get(`/orders/find/${userId}`);
                setOrders(res.data);
            } catch (err) {

            }
        };
        getOrders();
    }, [userId]);

    const history = useHistory();
    const handleView = (e) => {
        history.push(`/order/${e.target.id}`, {
            order: orders.find(order => order._id === e.target.id)
        })
    }

    return (
        <>
            <Header></Header>
            <div className="main-custom container">
                <div className="table-container table-responsive-lg">
                    <h4 className="order-title">Shopping History</h4>
                    <table className="table table-bordered table-striped align-middle text-center">
                        <thead className="table-dark-custom">
                            <tr>
                                <th>ID</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th>Shipping Address</th>
                                <th>Date</th>
                                <th>Status</th>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>
                                        {order.products.reduce((sum, product) => {
                                            return sum + product.quantity;
                                        }, 0)}
                                    </td>
                                    <td>${order.amount}</td>
                                    <td>
                                        {order.address.address_line_1}, {order.address.admin_area_2}, {order.address.country_code}
                                    </td>
                                    <td>{format(order.createdAt)}</td>
                                    <td>
                                        <Button type={order.status} />
                                    </td>
                                    <td>
                                        <div
                                            id={order._id}
                                            onClick={handleView}
                                            className="text-danger"
                                            style={{ cursor: "pointer" }}
                                        >
                                            View detalis
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Order
