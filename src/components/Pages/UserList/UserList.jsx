import React from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { rows } from "../../../Data";

const UserList = () => {
  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="usersName">
            <img className="usersImg" src={params.row.avatar} alt="" />
            {params.row.firstName}
          </div>
        );
      },
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "email",
      type: "string",
      width: 110,
      editable: true,
    },
    {
      field: "status",
      headerName: "status",

      sortable: false,
      width: 160,
    },
    {
      field: "transactions",
      headerName: "transactions",
      type: "number",

      sortable: false,
      width: 160,
    },
    {
      field: "action",
      headerName: "action",

      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <button
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={6}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
