import React from "react";
import "./trendingNfts.css";
import Slider from "react-slick";
import { TRENDING_NFTS } from "../../data/trendingNfts";
import TrendingCard from "./TrendingCard";

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  speed: 500,
  arrows: false,
};

const TrendingNfts = () => {
  return (
    <div className="trending-nfts absolute-center">
      <div className="tn-title">
        <span className="heading-gradient">TRENDING NFTs</span>
      </div>
      <div className="tn-bg-blob"></div>
      <Slider {...settings}>
        {TRENDING_NFTS.map((_nft, index) => (
          <TrendingCard key={index} nft={_nft}/>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingNfts;
