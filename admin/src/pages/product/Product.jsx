import './product.css';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { Publish } from '@material-ui/icons';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { userRequest } from '../../requestMethods';
import { updateProduct } from '../../redux/apiCall';

export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [pStats, setPStats] = useState([]);

    const product = useSelector(state => state.product.products.find(product => product._id === productId));

    const { isFetching } = useSelector(state => state.product);

    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    );
    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get("/orders/income?pid=" + productId);
                const list = res.data.sort((a, b) => {
                    return a._id - b._id
                })
                list.map((item) =>
                    setPStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], Sales: item.total },
                    ])
                );
            } catch (err) {
                console.log(err);
            }
        };
        getStats();
    }, [productId, MONTHS]);

    // const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState({
        title: product.title,
        description: product.description,
        img: product.img,
        price: product.price,
        inStock: true
    });
    const handleChange = e => {
        setNewProduct(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    };
    const handleUpdate = e => {
        e.preventDefault();
        updateProduct(dispatch, newProduct, productId);
    };
    return (
        <div className="product">
            <div className="product-title-container">
                <h1 className="product-title">Product</h1>
                <Link to="/newProduct">
                    <button className="product-add-btn">Create</button>
                </Link>
            </div>
            <div className="product-top">
                <div className="product-top-left">
                    <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="product-top-right">
                    <div className="product-info-top">
                        <img src={product.img} alt="" className="product-info-img" />
                        <span className="product-name">{product.title}</span>
                    </div>
                    <div className="product-info-bottom">
                        <div className="product-info-item">
                            <span className="product-info-key">id:</span>
                            <span className="product-info-value">{product._id}</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">sales:</span>
                            <span className="product-info-value">3000</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">in stock:</span>
                            <span className="product-info-value">{product.inStock ? "Yes" : "No"}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form className="product-form">
                    <div className="product-form-left">
                        <label>Product Name</label>
                        <input name="title" type="text" onChange={handleChange} defaultValue={product.title} />
                        <label>Product Description</label>
                        <input name="description" type="text" onChange={handleChange} defaultValue={product.description} />
                        <label>Price</label>
                        <input name="price" type="text" onChange={handleChange} defaultValue={product.price} />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock" onChange={handleChange}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="product-form-right">
                        <div className="product-upload">
                            <img src={product.img} alt="" className="product-upload-img" />
                            <label htmlFor="fileInput">
                                <Publish className="product-update-icon" />
                            </label>
                            <input type="file" id="fileInput" style={{ display: "none" }} disabled />
                        </div>
                        <button disabled={isFetching} className="product-update-btn" onClick={handleUpdate}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
