import { useEffect, useState } from "react";
import API from '../API'
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
//import { Posts } from "../../dummyData";

export default function Feed() {
  const [post, setPost] = useState([]);

  useEffect(()=> {
    const fetchPosts = async () => {
      const res = await API.get('/posts/timeline/');
      console.log(res);
      setPost(res.data);
    }
    fetchPosts();
  }, [])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {post.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
