import React, { useState } from "react";
import "../section/section.css";
import { Card, Rate, Flex } from "antd";

import img1 from "../assets/img/179_.jpg";
import img2 from "../assets/img/516iURdkK5L._SX679_.jpg";
import img3 from "../assets/img/61fvCYuWL1L._SX679_.jpg";
import img4 from "../assets/img/61QHigqJLvL._SY879_.jpg";
import img5 from "../assets/img/61x3iVx-ReL._SX679_.jpg";
import img6 from "../assets/img/69_.jpg";
import img7 from "../assets/img/713n+TxyfCL._SY879_.jpg";
import img8 from "../assets/img/71lxSDIFP6L._SY879_.jpg";
import img9 from "../assets/img/71qJNrZhd1L._SY879_.jpg";
import img10 from "../assets/img/71ssqIbkx7L._SX569_.jpg";
import img11 from "../assets/img/81FlxHbPiXL._SX679_.jpg";

const { Meta } = Card;
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

function Section3() {
  const [ratings, setRatings] = useState({});

  const extraCards = [
    {
      id: 101,
      title: "Arrow Men's 100% Cotton Slim Fit Shirt",
      category: "shirt",
      price: 1619,
      image: img1,
      description: "Formal shirt with Cutaway collar and Long",
    },
    {
      id: 102,
      title: "Diamond Ring",
      category: "jewelery",
      price: 12999,
      image: img2,
      description: "Shiny diamond ring for your special moments.",
    },
    {
      id: 103,
      title: "Gold Earrings",
      category: "jewelery",
      price: 3499,
      image: img3,
      description: "Traditional gold earrings with modern touch.",
    },
    {
      id: 104,
      title: "Bracelet Combo",
      category: "jewelery",
      price: 999,
      image: img4,
      description: "Trendy bracelet combo pack for gifting.",
    },
    {
      id: 105,
      title: "Handmade Necklace",
      category: "jewelery",
      price: 499,
      image: img5,
      description: "Beautiful handmade necklace with modern design.",
    },
    {
      id: 106,
      title: "Diamond Ring",
      category: "jewelery",
      price: 12999,
      image: img6,
      description: "Shiny diamond ring for your special moments.",
    },
    {
      id: 107,
      title: "Gold Earrings",
      category: "jewelery",
      price: 3499,
      image: img7,
      description: "Traditional gold earrings with modern touch.",
    },
    {
      id: 108,
      title: "Bracelet Combo",
      category: "jewelery",
      price: 999,
      image: img8,
      description: "Trendy bracelet combo pack for gifting.",
    },
    {
      id: 109,
      title: "Handmade Necklace",
      category: "jewelery",
      price: 499,
      image: img9,
      description: "Beautiful handmade necklace with modern design.",
    },
    {
      id: 110,
      title: "Diamond Ring",
      category: "jewelery",
      price: 12999,
      image: img10,
      description: "Shiny diamond ring for your special moments.",
    },
    {
      id: 111,
      title: "Gold Earrings",
      category: "jewelery",
      price: 3499,
      image: img11,
      description: "Traditional gold earrings with modern touch.",
    },
  ];

  const buttonStyle = {
    padding: "10px 18px",
    fontSize: "16px",
    textAlign: "center",
    cursor: "pointer",
    color: "#fff",
    backgroundColor: "#808080",
    border: "none",
    borderRadius: "12px",
    boxShadow: "0 4px #999",
    marginTop: "14px",
  };

  const handleMouseDown = (e) => {
    e.target.style.transform = "translateY(2px)";
    e.target.style.boxShadow = "0 2px #666";
  };

  const handleMouseUp = (e) => {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = "0 4px #999";
  };

  return (
    <div className="container">
      <div className="grid-container">
        {extraCards.map((post) => (
          <Card
            key={post.id}
            hoverable
            style={{ width: 300, margin: "10px" }}
            cover={
              <img
                alt={post.title}
                src={post.image}
                style={{ height: 300, objectFit: "contain" }}
              />
            }
          >
            <Meta title={post.title} description={post.category} />
            <h3>Rs. {post.price}</h3>
            <p style={{ fontSize: "15px" }}>
              {post.description.slice(0, 60)}...
            </p>

            <Flex gap="small" vertical>
              <Rate
                tooltips={desc}
                onChange={(val) =>
                  setRatings({ ...ratings, [post.id]: val })
                }
                value={ratings[post.id] || 3}
              />
              <span>
                {ratings[post.id] ? desc[ratings[post.id] - 1] : "normal"}
              </span>
            </Flex>

            <button
              style={buttonStyle}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              Add to Cart
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Section3;
