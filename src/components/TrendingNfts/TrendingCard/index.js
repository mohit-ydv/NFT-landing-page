import React from "react";
import "./trendingCard.css";

const TrendingCard = (props) => {
  const { nft } = props;
  return (
    <div className="trending-card absolute-center">
      <div className="tc-inner-wrapper">
        <div className="tc-content">
          <img alt={nft.user_name} src={nft.banner} className="tc-banner" />
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
