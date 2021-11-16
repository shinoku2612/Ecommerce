import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutlineOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [data, setData] = useState(productRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className="data-product">
                        <img className="data-product-img" src={params.row.img} alt=""></img>
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200, },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'price', headerName: 'Price Volume', width: 160 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={`/product/${params.row.id}`}>
                            <button className="product-edit">Edit</button>
                        </Link>
                        <DeleteOutlineOutlined className="product-delete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];
    return (
        <div className="productList">
            <DataGrid
                className="data-grid"
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
