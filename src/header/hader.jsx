import { useState } from "react";
import imges from "./image.png";
import { Link } from "react-router-dom";
import "../section/section.css";
import { Button, Divider, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function Hader() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="logo">
              <img src={imges} alt="logo" />
            </div>
            <div className="topnav">
              <Link to=" ">Home</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/about">About</Link>
            </div>
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>

            <Link to="/login" className="button button5">
              LOGIN
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Hader;
