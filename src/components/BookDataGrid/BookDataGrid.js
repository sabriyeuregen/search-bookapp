import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import "./BookDataGrid.scss";
const BookDataGrid = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {
    const fetchData  = async() =>{
      let result = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyDS3A3o4kNsFQ6QupjTALHmrHx1qkd7I6M" +
          "&maxResults=20");
      setData(result.data.items);
    };
    fetchData();
  },[])

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "categories", headerName: "Kategori", width: 150,
     valueGetter: (data) => data.row.volumeInfo.categories
    },
    { field: "title", headerName: "İsim", width: 150,
     valueGetter: (data) => data.row.volumeInfo.title},
    { field: "authors", headerName: "Yazar", width: 150,
     valueGetter: (data) => data.row.volumeInfo.authors
    }
  ];

  return (
    <div className="data-grid">
      <DataGrid
      style={{ height: 500,width: 500,background:"white"}}
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
};

export default BookDataGrid;
