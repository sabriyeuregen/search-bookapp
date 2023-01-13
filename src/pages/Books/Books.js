import axios from "axios";
import { useState, useEffect } from "react";
const Books = () => {
  const [data, setData] = useState("");

  async function fetchData() {
   let result = await axios(
      "https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyDS3A3o4kNsFQ6QupjTALHmrHx1qkd7I6M"+"&maxResults=20"
    ).then((response) => response);
    console.log(result.data.items)
  }

  useEffect(() => {
    setData(fetchData);
  }, []);

  
  return <div></div>;
};

export default Books;
