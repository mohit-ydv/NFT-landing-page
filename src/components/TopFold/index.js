import React from "react";
import "./topFold.css";
import Button from "../../common/Button";

const TopFold = () => {
  return (
    <div className="topfold  absolute-center">
      <div className="tf-left">
        <div className="tf-heading">
          Discover collect & sell{" "}
          <span className="heading-gradient">Extraordinary</span> NFTs
        </div>
        <div className="tf-description">
          The leading NFT marketplace on EthereumHome to the next generation of
          digital creators. Discover the best NFT collections.
        </div>
        <div className="tf-left-btns">
          <Button btnType="PRIMARY" btnText="EXPLORE" />
          <Button
            btnType="SECONDARY"
            btnText="Create"
            customClass="tf-left-secondary-btn"
          />
        </div>
        <div className="tf-left-infoStats">
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">200K+</div>
            <div className="tf-infoItem-label">Collections</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">10K+</div>
            <div className="tf-infoItem-label">Artists</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">423K+</div>
            <div className="tf-infoItem-label">Community</div>
          </div>
        </div>
      </div>
      <div className="tf-right">
        <div className="tf-right-bg-blob"></div>
        <div className="tf-right-diamond">
          <div className="tf-right-diamond-item absolute-center">
            <img
              className="tf-right-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/gcs/files/8604de2d9aaec98dd389e3af1b1a14b6.gif?auto=format&dpr=1&w=128"
            />
          </div>
          <div className="tf-right-diamond-item absolute-center">
            <img
              className="tf-right-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/gcs/files/9d6168e731afd02d5e878eb03876cfd4.gif?auto=format&dpr=1&w=128"
            />
          </div>
          <div className="tf-right-diamond-item absolute-center">
            <img
              className="tf-right-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/s/raw/files/c4c2e1e4c2de597ca9af598f7a99bde4.gif?auto=format&dpr=1&w=128"
            />
          </div>
          <div className="tf-right-diamond-item absolute-center">
            <img
              className="tf-right-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/gcs/files/32469815c1d8c3cbec6541f35d991adc.gif?auto=format&dpr=1&w=128"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFold;
