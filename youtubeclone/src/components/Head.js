import React, { useState } from "react";
import "./component.css";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { AiOutlineBell } from "react-icons/ai";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Body from "../components/Body";
import UserAvatar from "./UserAvtar";

export default function Head() {
  let loggedInUser = false;
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const savedUser = JSON.parse(localStorage.getItem("user"));

  savedUser ? (loggedInUser = true) : (loggedInUser = false);

  async function handleSearch() {
    try {
      let response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDaiq2ymb004NDevA0dgJ_zFahF5f4OL-4&part=snippet&q=${searchValue}&maxResults=10000&v=ImBV4_sGjCU`
      );
      const result = await response.json();
      console.log(result);
      setSearchResults(result.items || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="navSection">
      <div className="NavStyling">
        <div className="menuImageSection displayAlignCenter">
          <img className="logoImage" src={logo} alt="youTubeLogo" />
        </div>

        <div className="searchMic displayAlignCenter">
          {" "}
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <CiSearch className="search" onClick={handleSearch} />
          <IoMdMic />
        </div>

        <div className="bellLogin displayAlignCenter">
          <AiOutlineBell className="svgHeightWidth" />
          {loggedInUser ? (
            <div className="user-initial">
              <UserAvatar username={savedUser.email} />
            </div>
          ) : (
            <Link className="login" to="/sign-in">
              Sign-In
            </Link>
          )}
        </div>
      </div>
      <Body searchResults={searchResults} />
    </div>
  );
}
