import axios from "axios";
import { useState, useEffect } from "react";
import { RAPID_API_KEY } from "@env";


const useFetch = (endpoint: String, query: String) => {
  console.log(query);
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.request(options);
  
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        alert("there is an error");
      } finally {
        setIsLoading(false);
      }

      
    };
    fetchData();
  },[]);

  // const refetch = () => {
  //   setIsLoading(true);
  //   fetchData();
  // };

  return { data, isLoading, error };
};

export default useFetch;
