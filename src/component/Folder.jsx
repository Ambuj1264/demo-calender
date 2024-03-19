import React from 'react'
import styled from 'styled-components'
import more from "../assets/moreh.svg";
import folder from "../assets/folder1.svg";
const Folder = () => {
  return (
    <Wrapper>
      <div className="left">
        <img src={folder} alt="folder" />
        <div className="title">
            Folder Name
        </div>
      </div>
      <div className="right">
        <img src={more} alt="more" />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    display: flex;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
    .title{
        font: normal normal 600 13px/17px Source Serif Pro;
    }
    .left{
        display: flex;
        align-items: center;
        gap: 5px;
    }
`
export default Folder
