import React from "react";
import "../BlogCard/BlogCard.scss";

const BlogCard = ({ item }) => {
  return (
    <div className="blog-item-card">
      <div className="blog-card-image">
        <img src={`/images/${item?.image}`} alt="blog-img" />
        <div class="blog-labl">news</div>
        <div class="date-labl">
          <span>December 13, 2022</span>
        </div>
      </div>
      <div class="blog-product-content">
        <h4 className="product-title">{item?.title}</h4>
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
