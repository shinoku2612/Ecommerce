import './product.css';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';

export default function Product() {
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
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="product-top-right">
                    <div className="product-info-top">
                        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541489138l/42643290._SY475_.jpg" alt="" className="product-info-img" />
                        <span className="product-name">Fullstack Development with Nodejs</span>
                    </div>
                    <div className="product-info-bottom">
                        <div className="product-info-item">
                            <span className="product-info-key">id:</span>
                            <span className="product-info-value">123</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">sales:</span>
                            <span className="product-info-value">3000</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">active:</span>
                            <span className="product-info-value">yes</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">in stock:</span>
                            <span className="product-info-value">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form className="product-form">
                    <div className="product-form-left">
                        <label>Product Name</label>
                        <input type="text" placeholder="Fullstack Development with Nodejs" />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="product-form-right">
                        <div className="product-upload">
                            <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541489138l/42643290._SY475_.jpg" alt="" className="product-upload-img" />
                            <label for="fileInput">
                                <Publish className="product-update-icon" />
                            </label>
                            <input type="file" id="fileInput" style={{ display: "none" }} />
                        </div>
                        <button className="product-update-btn">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
