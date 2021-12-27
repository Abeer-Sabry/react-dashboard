import React, { useState } from "react";
import UsersListStyles from "./UsersListStyles";
import { DataGrid } from "@mui/x-data-grid";
import userRows from "./data";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [data, setData] = useState(userRows);
  const deletehandler = (id) => {
      setData(data.filter(item => item.id !== id))
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell">
            <img src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 150,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      type: "number",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      type: "",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to={`/user/${params.row.id}`}>
              <button className="edit">Edit</button>
            </Link>
            <span
              className="delete"
              onClick={() => deletehandler(params.row.id)}
            >
              <i className="far fa-trash-alt"></i>
            </span>
          </div>
        );
      },
    },
  ];

  return (
    <UsersListStyles>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </UsersListStyles>
  );
};

export default UsersList;
