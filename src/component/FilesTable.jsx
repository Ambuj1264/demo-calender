import React from "react";
import styled from "styled-components";
import settingIcon from "../assets/setting.svg";
import doc from "../assets/doc.svg";
import doc1 from "../assets/doc1.svg";
import doc2 from "../assets/doc2.svg";
import doc3 from "../assets/doc3.svg";
import owner from "../assets/user.png";
import more from "../assets/moreh.svg";
import image from "../assets/image.svg";

const FilesTable = () => {
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Last Opened</th>
            <th>
              <img src={settingIcon} alt="setting" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <img src={doc} alt="document" />
                Name of the file
              </div>
            </td>
            <td>
              <div>
                <div className="user">
                  <img src={owner} alt="owner" />
                </div>
                First last name
              </div>
            </td>
            <td>6 days ago</td>
            <td>
              <img src={more} alt="more" />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img src={doc1} alt="document" />
                Name of the file
              </div>
            </td>
            <td>
              <div>
                <div className="user">
                  <img src={owner} alt="owner" />
                </div>
                First last name
              </div>
            </td>
            <td>6 days ago</td>
            <td>
              <img src={more} alt="more" />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img src={doc2} alt="document" />
                Name of the file
              </div>
            </td>
            <td>
              <div>
                <div className="user">
                  <img src={owner} alt="owner" />
                </div>
                First last name
              </div>
            </td>
            <td>6 days ago</td>
            <td>
              <img src={more} alt="more" />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img src={doc3} alt="document" />
                Name of the file
              </div>
            </td>
            <td>
              <div>
                <div className="user">
                  <img src={owner} alt="owner" />
                </div>
                First last name
              </div>
            </td>
            <td>6 days ago</td>
            <td>
              <img src={more} alt="more" />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img src={image} alt="document" />
                Name of the file
              </div>
            </td>
            <td>
              <div>
                <div className="user">
                  <img src={owner} alt="owner" />
                </div>
                First last name
              </div>
            </td>
            <td>6 days ago</td>
            <td>
              <img src={more} alt="more" />
            </td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    tbody {
      background-color: #fff;
    }
    th {
      text-align: left;
      font: normal normal 600 11px/15px Source Serif Pro;
      border: none;
    }
    td {
      padding: 5px;
      
      border: none;
      border-bottom: 1px solid #e9edf2;
      font: normal normal 600 13px/17px Source Serif Pro;
      div {
        display: flex;
        align-items: center;
        gap: 5px;
      }
      .user{
        height: 20px;
        width: 20px;
        overflow: hidden;
        border-radius: 50%;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            background-position: center;
        }
      }
    }
  }
`;
export default FilesTable;
