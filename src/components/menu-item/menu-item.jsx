import React from "react";
import "./menu-item.css";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={size === null ? "menu-item" : `menu-item ${size}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(images/category-images/${title}.png)`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
