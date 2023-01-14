import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
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


 // console.log(data[0].volumeInfo.categories[0])
  return (
    <div style={{height: 500, width:"80%", float:"right"}}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
};

export default BookDataGrid;
