import React from 'react';
import ApplyIcon from "/public/assets/images/icon/apply-ellipse.svg";

export interface ArticleCardProps {
  blogImg: string;
  authorImg: string;
  authorName: string;
  authorPosition: string;
  title: string;
  category: string;
}
const ArticleCard: React.FC<ArticleCardProps> = ({
  blogImg,
  authorImg,
  authorName,
  authorPosition,
  title,
  category,

}) => {
  return (
    <div className="recent-article-card3">
      <div className="article-img">
        <img className="img-fluid" src={blogImg} alt="" />
      </div>
      <div className="article-content">
        <div className="article-category">
          <a className="primry-btn-2" href="blog-grid.html">{category}</a>
        </div>
        <h4><a href="blog-details.html">{title}</a></h4>
        <div className="author-and-btn">
          <div className="author-area">
            <div className="author-img">
              <img src={authorImg} alt="" />
            </div>
            <div className="author-details">
              <h6><a href="blog-grid.html">{authorName}</a></h6>
              <span>{authorPosition}</span>
            </div>
          </div>
          <div className="apply-btn">
            <a href="blog-details.html"><span><img src={ApplyIcon} alt="" /></span>View Details</a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ArticleCard