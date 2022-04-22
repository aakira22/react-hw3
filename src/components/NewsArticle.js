function NewsArticle({ data }) {
  return (
    <div className="news">
      <h2 className="news_title"> {data.title} </h2>
      <p className="news_desc">{data.abstract}</p>
      <br />
      <span className="news_author"> ✏️ {data.byline}</span> <br />
      <span className="news_published">⌛ {data.published_date}</span>
      <br />
      <span className="news_source">
        <a href={data.url}>{data.url}</a>
      </span>
    </div>
  );
}

export default NewsArticle;
