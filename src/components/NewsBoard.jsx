import { useEffect, useState } from "react";
import NewsItem from "./NewsItem.jsx";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, [category]);

  return (
    <div>
        <h2 className="text-center my-4 classy-heading">{category.charAt(0).toUpperCase() + category.slice(1)}
            <span className="badge bg-danger">News</span>
        </h2>      
        <div className="card-container">
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title || "No Title"}
            description={news.description}
            src={news.urlToImage || "https://via.placeholder.com/360x200.png?text=No+Image"}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;