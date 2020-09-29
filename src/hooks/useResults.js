import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("Hi there bud!");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "vancouver",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };

  // Call searchApi when component is first rendered.
  useEffect(() => {
    searchApi("sushi");
  }, []);

  return [searchApi, results, errorMessage];
};
