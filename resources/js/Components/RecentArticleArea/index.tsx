import React from 'react'
import ArticleCard from './ArticleCard'

//Icons
import AuthorIcon1 from "/public/assets/images/blog/blog-author-31.png"
import BlogImg1 from "/public/assets/images/blog/blog-img-31.png"
import AuthorIcon2 from "/public/assets/images/blog/blog-author-32.png"
import BlogImg2 from "/public/assets/images/blog/blog-img-32.png"
import AuthorIcon3 from "/public/assets/images/blog/blog-author-33.png"
import BlogImg3 from "/public/assets/images/blog/blog-img-33.png"
const RecentArticleArea = () => {
  return (
    <div className="home3-recent-article-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex justify-content-center gap-3">
            <div className="section-title1 text-center">
              <h2>Our Recent <span>Article</span></h2>
              <p>To much valuable feed from our trusted users in world-wide.</p>
            </div>
          </div>
        </div>
        <div className="row g-4 gy-5 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <ArticleCard
              authorImg={AuthorIcon1}
              blogImg={BlogImg1}
              authorName='Roland Khelcy'
              authorPosition='Admin'
              category='Marketing'
              title="How To Apply Your Dream Jobs In Digital Marketing, Easy Solution."
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <ArticleCard
              authorImg={AuthorIcon2}
              blogImg={BlogImg2}
              authorName='Mrs. Rudhela Saley'
              authorPosition='Admin'
              category='Design'
              title="To Be Continue Redesign & Build Up Your Career Opportunity."
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <ArticleCard
              authorImg={AuthorIcon3}
              blogImg={BlogImg3}
              authorName='Martoniey Sekh'
              authorPosition='Admin'
              category='Technology'
              title="If You Are A talented People, Make Sure Your Technology Part."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentArticleArea