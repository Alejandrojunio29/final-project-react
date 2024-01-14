import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainSideHome() {
  const navigate = useNavigate();
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
            <article key={`post-${post._id}`}>
              <div
                onClick={() => navigate(`/posts/${post._id}`)}
                className="card w-auto bg-base-100 shadow-xl flex flex-wrap cursor-pointer"
              >
                <figure>
                  <img src={post.postImg} alt="postImg" />
                </figure>
                <div className="card-body">
                  <div className="flex p-0 w-auto justify-items-start gap-2">
                    <img
                      src={post.userImg}
                      alt="userImg"
                      className="w-10 h-10 rounded-full "
                    />
                    <div>
                      <h3 className="card-title text-base">{post.userName}</h3>
                      <h5 className="text-sm">{post.date}</h5>
                    </div>
                  </div>
                  <div className=" ps-12   ">
                    <h1 className="font-bold text-2xl  ">{post.title}</h1>
                    <div className="flex gap-10 text-sm pt-2">
                      <h5 className="btn border-hidden bg-inherit btn-sm">
                        #{post.hashtag1}
                      </h5>
                      <h5 className="btn border-hidden btn-outline btn-success btn-sm">
                        #{post.hashtag2}
                      </h5>
                      <h5 className="btn border-hidden btn-outline btn-warning btn-sm">
                        #{post.hashtag3}
                      </h5>
                      <h5 className="btn border-hidden btn-outline btn-accent btn-sm">
                        #{post.hashtag4}
                      </h5>
                    </div>
                    <div className="card-actions pt-4  justify-between">
                      <button className="btn border-hidden btn-sm bg-inherit flex px-2 ">
                        <a href="">👍</a>
                        <a href="">👀</a>
                        <a href="">🎉</a>
                        <a href="">😎</a>
                        <a href="">😂</a>
                        <h5 className="ps-1">15 Reactions</h5>
                      </button>
                      <button className=" btn border-hidden bg-inherit  btn-sm flex  gap-1">
                        <a href="">💬</a>
                        <h5>1 comments</h5>
                      </button>
                      <button className="btn bg-transparent hover:bg-transparent border-hidden   btn-sm flex  gap-1">
                        <h5 className="text-sm">{post.timeToRead}</h5>
                        <a href="" className="hover:bg-blue-200">
                          🕒
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
