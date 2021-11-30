import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutlineOutlined } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userRequest } from '../../requestMethods';

export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("/users");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);
  console.log(users)

  const handleDelete = (id) => {
    setUsers(users.filter(item => item._id !== id));
  };
  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    {
      field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
        return (
          <div className="data-user">
            {`${params.row.firstname} ${params.row.lastname}`}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 200, },
    {
      field: 'isAdmin', headerName: 'Role', width: 120, renderCell: (params) => {
        return (
          <div className="data-userRole">
            {params.row.isAdmin ? <p className="admin">Admin</p> : <p className="guest">Guest</p>}
          </div>
        )
      }
    },
    {
      field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row._id}`}>
              <button className="user-edit">Edit</button>
            </Link>
            <DeleteOutlineOutlined className="user-delete" onClick={() => handleDelete(params.row._id)} />
          </>
        )
      }
    }
  ];

  return (
    <div className="userList">
      <DataGrid
        className="data-grid"
        rows={users}
        columns={columns}
        getRowId={row => row._id}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
