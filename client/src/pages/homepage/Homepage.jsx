import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Homepage() {
  const [posts, setposts] = useState([]);
  const {search} = useLocation();
  // console.log(location);

  useEffect(() => {
    const fetchPosts = async() => {
      const res = await axios.get("/posts"+search)
      // console.log(res);
      setposts(res.data);
    }
      fetchPosts();
  }, [search])
 
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}
