import React from "react";
import HealthNew from "../../data/HealthNews.json";
import "./HealthNews.css";
const HealthNews = () => {
  return (
    <div className="container-news">
      <h2 className="title-news">Tin tức mới nhất</h2>
      <div className="wrapper-news">
        <div className="news-left">
          <img src={HealthNew[0].image_url} className="image-news-left" />
        </div>
        <div className="news-right">
          {HealthNew.slice(1, 4).map((news, index) => (
            <div className="item-news-right" key={index}>
              <img src={news.image_url} className="image-news-right" />
              <div className="content-news-right">
                <p className="author-news-right">{news.author}</p>
                <p className="title-news-right">{news.description}</p>
                <p className="date-news-right">
                  <i class="fa-regular fa-calendar"></i> {news.date_published}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthNews;
