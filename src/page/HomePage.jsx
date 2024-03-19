import React, { useState } from "react";
import styled from "styled-components";
import Bearish from "../assets/bearish.png";
import search from "../assets/search.svg";
import homeIcon from "../assets/home.svg";
import videooutline from "../assets/videooutline.svg";
import message from "../assets/message.svg";
import calender from "../assets/calender.svg";
import checked from "../assets/checked.svg";
import group from "../assets/group.svg";
import person from "../assets/person.svg";
import mail from "../assets/mail.svg";
import Calendar from "./Calender";

const HomePage = () => {
  const sidebarList = [
    { icon: search, name: "Search" },
    { icon: homeIcon, name: "Home" },
    { icon: videooutline, name: "Video" },
    { icon: mail, name: "Mail" },
    { icon: calender, name: "Plan" },
    { icon: checked, name: "Task" },
    { icon: message, name: "Stream" },
    { icon: group, name: "CRM" },
    { icon: person, name: "Trax" },
  ];

  return (
    <>
      <Wrapper>
        <div className="left_fixed_sidebar">
          <div className="logo">
            <img src={Bearish} alt="logo" />
          </div>
          <ul>
            {sidebarList.map((element, index) => (
              <li key={index}>
                <img src={element.icon} alt={element.name} />
                <span className="name">{element.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{
            margin: "auto",
            display: "grid",
            alignItems: "center",
            py: 5,
            width: "90%",
          }}
        >
          <Calendar />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .left_fixed_sidebar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 50px;
    background: #ffffff;
    box-shadow: 0px 3px 6px #00000029;
    border-right: 2px solid #e9edf2;
    border-radius: 5px;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content:center;
  }

  img {
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 10;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo img {
    height: 30px;
    width: 30px;
  }

  .name {
    font: normal normal 300 11px/15px Source Serif Pro;
  }

  /* Media queries for responsive design */
  @media screen and (max-width: 768px) {
    .main {
      padding: 10px;
    }
  }
`;

export default HomePage;
