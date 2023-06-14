import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export interface UserFeedbackProps {
  authorName: string;
  authorPosition: string;
  authorReview: string;
  isShowed: boolean;
}

const UserFeedback: React.FC<UserFeedbackProps> = ({ authorName, authorPosition, authorReview, isShowed }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      {isShowed && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="swiper-slide"
        >
          <div className="user-feedback-wrap">
            <div className="user-feedback-top">
              <div className="author-area">
                <div className="author-img">
                  <img src="assets/images/bg/testimonial-author3.png" alt="" />
                </div>
                <div className="author-content">
                  <h5>{authorName}</h5>
                  <span>{authorPosition}</span>
                </div>
              </div>
              <div className="reviews">
                <ul>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-half"></i></li>
                </ul>
              </div>
            </div>
            <p>{authorReview}</p>
          </div>
        </motion.div>
      )}
    </>


  );
};

export default UserFeedback;
