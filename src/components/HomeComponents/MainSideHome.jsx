import PostCard from "./PostCard";
import { useEffect, useState } from "react";

export default function MainSideHome() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
        console.log("esta es la data de main", data);
      });
  }, []);
  return (
    <>
      <section className="flex basis-1/2 flex-wrap grow">
        {posts.map((post) => {
          return (
            <article key={`prod-${post.id}`}>
              <PostCard
                postImg={post.postImg}
                userImg={post.userImg}
                userName={post.userName}
                date={post.date}
                title={post.title}
                hashtag1={post.hashtag1}
                hashtag2={post.hashtag2}
                hashtag3={post.hashtag3}
                hashtag4={post.hashtag4}
                timeToRead={post.timeToRead}
              />
            </article>
          );
        })}
      </section>
    </>
  );
}
