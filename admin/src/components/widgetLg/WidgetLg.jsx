import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';
import './widgetLg.css';
import { format } from 'timeago.js';

export default function WidgetLg() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("/orders");
                setOrders(res.data);
            } catch { }
        };
        getOrders();
    }, []);

    const Button = ({ type }) => {
        return <button className={`widgetLg-btn ${type}`}> {type}</button >
    };

    return (
        <div className="widgetLg">
            <h3 className="widgetLg-title">Latest Transactions</h3>
            <table className="widgetLg-table">
                <thead>
                    <tr className="widgetLg-row">
                        <th className="widgetLg-header">Customer</th>
                        <th className="widgetLg-header">Date</th>
                        <th className="widgetLg-header">Amount</th>
                        <th className="widgetLg-header">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr className="widgetLg-row" key={order._id}>
                            <td className="widgetLg-user">
                                <span className="widgetLg-name">{order.userId}</span>
                            </td>
                            <td className="widgetLg-date">{format(order.createdAt)}</td>
                            <td className="widgetLg-amount">$ {order.amount}</td>
                            <td className="widgetLg-status">
                                <Button type={order.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}