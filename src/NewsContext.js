import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "nQM7xl8ocDRSFKg6O9KS1NIhp4utA4oz";

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`
      )
      .then((res) => {
        setData(res.data);
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
