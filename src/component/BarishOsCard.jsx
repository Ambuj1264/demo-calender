import React from "react";
import styled from "styled-components";
import bear from "../assets/bear.png";
const BarishOsCard = () => {
  return (
    <Wrapper>
      <div className="title">Upload to Bearish OS</div>
      <div className="description">
        All items uploaded to Bearish OS are fully secured and private.
      </div>
      <div className="image">
        <img src={bear} alt="" />
      </div>
      <div className="description center">
        Drag and Drop items here to upload them
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: #ffecc7 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  .title {
    font: normal normal 600 15px/21px Source Serif Pro;
  }
  .description {
    font: normal normal 200 11px/15px Source Serif Pro;
  }
  .center {
    text-align: center;
    padding: 0 5px;
  }
  .image{
    width: 126px;
    height: 144px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-position: center;
    }
  }
`;
export default BarishOsCard;
