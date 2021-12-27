import React, { useState } from "react";
import ProductsStyles from "./ProductsStyles";
import { DataGrid } from "@mui/x-data-grid";
import productRows from "./data";
import { Link } from "react-router-dom";
const Products = () => {
    const [data, setData] = useState(productRows);

    const deletehandler = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cell">
                        <img src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "stock", headerName: "Stock", width: 100 },
        {
            field: "status",
            headerName: "Status",
            type: "number",
            width: 100,
        },
        {
            field: "price",
            headerName: "Price",
            type: "number",
            width: 120,
        },
        {
            field: "action",
            headerName: "Action",
            type: "",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="action">
                        <Link to={`/products/${params.row.id}`}>
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
        <ProductsStyles>
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
        </ProductsStyles>
    );
};

export default Products;
