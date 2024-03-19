import React from "react";
import styled from "styled-components";
import folder from "../assets/folder1.svg";
import view from "../assets/show.svg";
import link from "../assets/link.svg";

const ActiveLink = () => {
  return (
    <Wrapper>
      <div className="button">
        <div className="icon_name">
          <img src={link} alt="" />
          <span className="name">Link name one</span>
        </div>
        <span className="action"></span>
      </div>
      <ul>
        <li>
          <img src={folder} alt="" />
          <span className="name">folder or file linked...</span>
        </li>
        <li>
          <img src={view} alt="" />
          <span className="name">10 totla views</span>
        </li>
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #e9edf2;
  border-radius: 5px;
  padding: 10px;
  .button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon_name {
      display: flex;
      align-items: center;
      gap: 5px;
      .name {
        font: normal normal 600 13px/17px Source Serif Pro;
      }
    }
    .action {
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-left: 6px solid #00767b;
      border-bottom: 5px solid transparent;
    }
  }
  ul {
    list-style: none;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    img {
      height: 20px;
      width: 20px;
    }
    li {
      display: flex;
      gap: 5px;
      align-items: center;
      .name {
        font: normal normal 300 13px/17px Source Serif Pro;
      }
    }
  }
`;
export default ActiveLink;
