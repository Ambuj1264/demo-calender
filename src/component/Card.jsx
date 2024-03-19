import React from "react";
import styled from "styled-components";
import more from "../assets/moreh.svg";
const Card = ({ logo, title, progress }) => {
  return (
    <Wrapper>
      <div>
        <div className="card_top">
          <div className="app_logo">
            <img src={logo} alt="" />
          </div>
          <div className="action">
            <img src={more} alt="" />
          </div>
        </div>
        <div className="name_files">
          <span className="name">{title}</span>
          <span className="files">100 files</span>
        </div>
      </div>
      <div className="storage">
        <span>10 GB of 15 GB Used</span>
        <div className={`${progress} progress`}>
          <div></div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .card_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        height: 30px;
        width: 30px;
    }
    .action{
        img{
            height: 20px;
        width: 20px;
        }
    }
  }
  .name_files {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    .name {
      font: normal normal 600 13px/17px Source Serif Pro;
    }
    .files {
      font: normal normal 300 11px/15px Source Serif Pro;
    }
  }
  .storage {
    display: flex;
    flex-direction: column;
    gap: 5px;
    span {
      font: normal normal normal 11px/15px Source Serif Pro;
    }
    .progress {
      height: 8px;
      border-radius: 8px;
      width: 100%;
      div {
        height: 8px;
        border-radius: 8px;
        width: 50%;
      }
    }
    .drive{
        background: #FFECC7 0% 0% no-repeat padding-box;
        div{
            background: #FFA700 0% 0% no-repeat padding-box;
        }
    }
    .dropbox{
        background: #A0B6FF 0% 0% no-repeat padding-box;
        div{
            background: #0008C6 0% 0% no-repeat padding-box;
        }
    }
    .box{
        background: #5EE2A0 0% 0% no-repeat padding-box;
        div{
            background: #085A15 0% 0% no-repeat padding-box;
        }
    }
  }
`;
export default Card;
