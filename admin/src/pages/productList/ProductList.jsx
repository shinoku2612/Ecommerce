import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutlineOutlined } from '@material-ui/icons';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../../redux/apiCall';

export default function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteProduct(dispatch, id);
    };
    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className="data-product">
                        <img className="data-product-img" src={params.row.img} alt=""></img>
                        {params.row.title}
                    </div>
                )
            }
        },
        { field: 'inStock', headerName: 'Stock', width: 200, },
        { field: 'price', headerName: 'Price Volume', width: 160 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={`/product/${params.row._id}`}>
                            <button className="product-edit">Edit</button>
                        </Link>
                        <DeleteOutlineOutlined className="product-delete" onClick={() => handleDelete(params.row._id)} />
                    </>
                )
            }
        }
    ];
    return (
        <div className="productList">
            <div className="product-title-container productList-header">
                <h1 className="product-title">Products</h1>
                <Link to="/newProduct" className="link-item">
                    <button className="product-add-btn">Create</button>
                </Link>
            </div>
            <DataGrid
                className="data-grid"
                rows={products}
                columns={columns}
                getRowId={row => row._id}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
