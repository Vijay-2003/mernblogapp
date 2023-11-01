import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats,setCats] = useState([])

  useEffect(() => {
    const getCats = async() => {
      const res = await axios.get("/categories")
      setCats(res.data);
    }
    getCats();
  })
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        {/* <ul className="sidebarList">
          {cats.map(c => {
            <Link to={`/cat=${c.name}`} className="link">
             <li className="sidebarListItem">{c.name}</li>
             </Link>
          })}
        </ul> */}
         <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
