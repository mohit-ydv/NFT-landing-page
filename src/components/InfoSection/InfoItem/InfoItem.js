import React from "react";
import "./infoItem.css";

const InfoItem = ({ item }) => {
  return (
    <div className="info-item absolute-center">
      <img alt={item.icon} className="ii-icon" src={item.icon} />
      <div className="ii-title">{item.section_title}</div>
      <div className="ii-description">{item.description}</div>
    </div>
  );
};

export default InfoItem;
