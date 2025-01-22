import React, { useState } from "react";
import "./component.css";
import { MdHome, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdHistory, MdOutlineWatchLater, MdThumbUpOffAlt, MdShortText } from "react-icons/md";
import { useSelector } from "react-redux";
import { BsDot } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";



function formatDuration(isoDuration) {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const matches = regex.exec(isoDuration);
  const hours = matches[1] ? parseInt(matches[1]) : 0;
  const minutes = matches[2] ? parseInt(matches[2]) : 0;
  const seconds = matches[3] ? parseInt(matches[3]) : 0;

  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    : `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function formatViewCount(num) {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num.toString();
}

function timeAgo(publishedAt) {
  const now = new Date();
  const publishedDate = new Date(publishedAt);
  const seconds = Math.floor((now - publishedDate) / 1000);
  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
  }
  return "Just now";
}

export default function Body({ searchResults }) {
  const homePage = useSelector((state) => state.homePageReducerSlice);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeItem, setActiveItem] = useState("home");
  const location = useLocation();
  const navigate = useNavigate(); 
  const [openSideBar, setOpenSideBar] = useState(true);



  const handleActiveClick = (item) => {
    setActiveItem(item);
    navigate(item);
  };
  function handleOpenSideBar(){
    if (openSideBar === true){
      setOpenSideBar(false);
    }else if(openSideBar === false){
      setOpenSideBar(true);
    }
  }

  return ( 
    <div className="container">
       <AiOutlineMenu className="menu" onClick={handleOpenSideBar} />
  { openSideBar ? (
       <div className="sidebar">
        <a className={activeItem === "home" ? "active" : ""} href="#home" onClick={() => handleActiveClick("/home")}>
          <MdHome className="icon" /> <span>Home</span>
        </a>
        <a className={activeItem === "shorts" ? "active" : ""} href="#shorts" onClick={() => handleActiveClick("/shorts")}>
          <MdShortText className="icon" /> <span>Shorts</span>
        </a>
        <a className={activeItem === "subscriptions" ? "active" : ""} href="#subscriptions" onClick={() => handleActiveClick("/subscriptions")}>
          <MdOutlineSubscriptions className="icon" /> <span>Subscriptions</span>
        </a>
        <hr />
        <a className={activeItem === "history" ? "active" : ""} href="#history" onClick={() => handleActiveClick("/history")}>
          <MdHistory className="icon" /> <span>History</span>
        </a>
        <a className={activeItem === "playlists" ? "active" : ""} href="#playlists" onClick={() => handleActiveClick("/playlists")}>
          <MdOutlineVideoLibrary className="icon" /> <span>Playlists</span>
        </a>
        <a className={activeItem === "watchLater" ? "active" : ""} href="#watchLater" onClick={() => handleActiveClick("/watchLater")}>
          <MdOutlineWatchLater className="icon" /> <span>Watch Later</span>
        </a>
        <a className={activeItem === "likedVideos" ? "active" : ""} href="#likedVideos" onClick={() => handleActiveClick("/likedVideos")}>
          <MdThumbUpOffAlt className="icon" /> <span>Liked Videos</span>
        </a>
      </div>) :(
        <>
        
        <div className="sidebar1">
                        

        <a className={activeItem === "home" ? "active1" : ""} href="#home" onClick={() => handleActiveClick("/home")}>
          <MdHome className="icon"/> 
        </a>
        <a className={activeItem === "shorts" ? "active1" : ""} href="#shorts" onClick={() => handleActiveClick("/shorts")}>
          <MdShortText className="icon" />
        </a>
        <a className={activeItem === "subscriptions" ? "active1" : ""} href="#subscriptions" onClick={() => handleActiveClick("/subscriptions")}>
          <MdOutlineSubscriptions className="icon" /> 
        </a>
        </div>
        </>)}

      <div className="content">
      {location.pathname === "/sign-in" ? (
          <SignIn />
        ) : (
          <>
        {searchResults?.length > 0 ? (
          <div className="video-grid">
            {searchResults.map((video, index) => (
              <div key={index} className="video-item">
                <div className="thumbnail-container" onClick={() => setSelectedVideo(video.id.videoId)}>
                  <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                </div>
                <p>{video.snippet.title}</p>
                <p>{video.snippet.channelTitle}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="video-grid">
            {homePage.youTubeData.map((data, index) => (
              <div key={index} className="video-item">
                <div className="thumbnail-container" onClick={() => setSelectedVideo(data.id)}>
                  <img src={data.snippet.thumbnails.high.url} alt={data.snippet.title} />
                  <span className="duration-overlay">{formatDuration(data.contentDetails.duration)}</span>
                </div>
                <p>{data.snippet.title}</p>
                <p>{data.snippet.channelTitle}</p>
                <div className="ViewsAndPublished">
                <span className="viewsStyling">{formatViewCount(data.statistics.viewCount)} views</span>
                <span className="published-date">
                  <BsDot />
                  {timeAgo(data.snippet.publishedAt)}
                </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedVideo && (
          <div className="video-modal">
            <div className="modal-content">
              <span className="close-btn" onClick={() => setSelectedVideo(null)}>Close</span>
              <iframe width="800" height="450" src={`https://www.youtube.com/embed/${selectedVideo}`} frameBorder="0" allowFullScreen/>
            </div>
          </div>
        )}
          </>
        )}
      </div>
    </div>
  );
}
