import { useEffect, useState } from "react";
import axios from "axios";
import "./SearchData.scss";
import SearchDataList from "./SearchDataList";
const SearchData = () => {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
         const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}
         "&key=AIzaSyDS3A3o4kNsFQ6QupjTALHmrHx1qkd7I6M`+"&maxResults=10");
         setData(res.data.items);
        };
        if( search.length > 2) fetchData();
       },[search])
     
    
   
     const inputHandler = (e) => {
       setSearch(e.target.value.toLowerCase());
     };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        onChange={inputHandler}
        placeholder="Bir kitap ismi giriniz"
      ></input>
      <SearchDataList data={data}/>
    </div>
  )
}

export default SearchData