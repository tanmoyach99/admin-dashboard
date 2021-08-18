import React from "react";
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { rowsProduct } from "../../../Data";

const ProductList = () => {
  const [data, setData] = useState(rowsProduct);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Name",
      headerName: " name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="productName">
            <img className="productImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },

    {
      field: "stock",
      headerName: "stock",
      type: "number",
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
      field: "price",
      headerName: "price",
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
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <button
              className="productListDelete"
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
    <div className="productList">
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

export default ProductList;
