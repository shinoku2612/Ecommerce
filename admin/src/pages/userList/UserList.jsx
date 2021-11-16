import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutlineOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function UserList() {

  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
      field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
        return (
          <div className="data-user">
            <img className="data-user-img" src={params.row.avatar} alt=""></img>
            {params.row.fullName}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 200, },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'transaction', headerName: 'Transaction Volume', width: 160 },
    {
      field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="user-edit">Edit</button>
            </Link>
            <DeleteOutlineOutlined className="user-delete" onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    }
  ];

  return (
    <div className="userList">
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
