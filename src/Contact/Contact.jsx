import React from "react";
import { Card } from "antd";
import {
  MessageOutlined,
  ShoppingOutlined,
  UserOutlined,
  WalletOutlined,
  FileTextOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "../section/section.css";

function Contact() {
  const topics = [
    {
      icon: <ShoppingOutlined style={{ color: "#f39c12" }} />,
      title: "Order Related",
    },
    {
      icon: <MessageOutlined style={{ color: "#f39c12" }} />,
      title: "Shopping",
    },
    {
      icon: <UserOutlined style={{ color: "#f39c12" }} />,
      title: "AD FAISHON Account",
    },
    {
      icon: <WalletOutlined style={{ color: "#f39c12" }} />,
      title: "Payments",
    },
    {
      icon: <UploadOutlined style={{ color: "#f39c12" }} />,
      title: "Sell On AD FAISHON",
    },
    {
      icon: <FileTextOutlined style={{ color: "#f39c12" }} />,
      title: "Others",
    },
  ];

  return (
    <div className="contac-papge">
    <div className="container">
      <div className="contact-page">
        <h2>Browse Topics</h2>
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <Card key={index} className="topic-card" hoverable>
              <div className="topic-icon">{topic.icon}</div>
              <div className="topic-title">{topic.title}</div>
            </Card>
          ))}
        </div>

        <div className="chat-support">
          <h3>Need more help?</h3>
          <Card className="chat-card" hoverable>
            <div className="chat-row">
              <MessageOutlined style={{ fontSize: "24px" }} />
              <div className="chat-texts">
                <div className="chat-title">Chat with us</div>
                <div className="chat-desc">Get instant query assistance</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
