import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/custom.css';
import { publicRequest } from '../requestMethods';
import { Link } from 'react-router-dom';

const OrderDetail = () => {
    const location = useLocation();
    const orderId = location.pathname.split("/")[2];
    const order = location.state?.order;
    // console.log(order)

    const orderProduct = location.state?.order.products;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            await orderProduct.forEach(async (product) => {
                try {
                    const res = await publicRequest.get(`/products/find/${product.productId}`);
                    setProducts(prev => [...prev, res.data]);
                } catch (err) {

                }
            })
        };
        getProduct();
    }, [orderProduct]);
    return (
        <>
            <Header></Header>
            <div className="main-custom container">
                <div className="container table-responsive-lg">
                    <h4 className="order-title"><strong>Order ID:</strong> {orderId}</h4>
                    <table className="table table-bordered align-middle text-center">
                        <thead className="table-dark-custom">
                            <tr>
                                <th className="th-custom">Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product._id}>
                                    <td className="td-product">
                                        <img src={product.img} alt={product.title}
                                            className="product-img"
                                        />
                                        {product.title}
                                    </td>
                                    <td>$ {product.price}</td>
                                    <td>{orderProduct[products.indexOf(product)]?.quantity}</td>
                                    <td> $
                                        {
                                            Math.round(
                                                product.price * orderProduct[products.indexOf(product)]?.quantity * 100
                                            ) / 100
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="tf-custom">
                            <tr className="fw-bold">
                                <td colSpan="2"></td>
                                <td>TOTAL: </td>
                                <td>$ {order.amount}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="btn-redirect">
                    <Link to="/orders" className="m-3 btn btn-outline-dark btn-custom">Back to History</Link>
                    <Link to="/" className="m-3 btn btn-dark btn-custom">Go to home page</Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default OrderDetail
