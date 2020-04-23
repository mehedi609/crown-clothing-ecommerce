import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.css";

class Directory extends Component {
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "hats.png",
        size: null,
        id: 1,
        linkUrl: "shop/hats",
      },
      {
        title: "jackets",
        imageUrl: "jackets.png",
        size: null,
        id: 2,
        linkUrl: "shop/jackets",
      },
      {
        title: "sneakers",
        imageUrl: "sneakers.png",
        size: null,
        id: 3,
        linkUrl: "shop/sneakers",
      },
      {
        title: "women",
        imageUrl: "women.png",
        size: "large",
        id: 4,
        linkUrl: "shop/womens",
      },
      {
        title: "men",
        imageUrl: "men.png",
        size: "large",
        id: 5,
        linkUrl: "shop/mens",
      },
    ],
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
