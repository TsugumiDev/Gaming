import React from "react";
import "../BlogCard/BlogCard.scss";

const BlogCard = ({ item, isBlogPage }) => {
  console.log(item);

  return (
    <div className="blog-item-card">
      <div className="blog-card-image">
        <img src="/images/10.webp" alt="blog-img" />
        <div class="blog-labl">news</div>
        <div class="date-labl">
          <span>December 13, 2022</span>
        </div>
      </div>
      <div class="blog-product-content">
        <h4 className="product-title">
          {isBlogPage ? item?.title : item?.productName}
        </h4>
      </div>
      <div class="blog-number">
        <span>AUTHOR: WorkDo</span>
      </div>
      <div class="read-more-btn">
        <span>READ MORE</span>
      </div>
    </div>
  );
};

export default BlogCard;
