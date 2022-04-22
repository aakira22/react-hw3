import NewsArticle from "./NewsArticle";
import { useContext } from "react";
import { NewsContext } from "../NewsContext";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <h1 className="head-title">The NYT World News 📖</h1>
      <div className="all_news">
        {data
          ? data.results.map((news) => (
              <NewsArticle data={news} key={news.uri} />
            ))
          : "Loading..."}
      </div>
    </div>
  );
}

export default News;
