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
        <div className="flex  ">
          <button className="btn  btn-outline text-lg border-none text-stone-500 hover:bg-white hover:text-indigo-600 focus:text-black focus:font-bold ">
            Relevant
          </button>
          <button className="btn  btn-outline text-lg border-none text-stone-500 hover:bg-white hover:text-indigo-700 focus:text-black  focus:font-bold ">
            Latest
          </button>
          <button className="btn  btn-outline text-lg border-none text-stone-500 hover:bg-white hover:text-indigo-700 focus:text-black  focus:font-bold ">
            Top
          </button>
        </div>
        {posts.map((post) => {
          return (
            <article className="pt-2" key={`post-${post._id}`}>
              <div
                onClick={() => navigate(`/posts/${post._id}`)}
                className="card w-auto bg-base-100 shadow-sm flex flex-wrap cursor-pointer rounded-md"
              >
                <figure className="">
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
                      <h3 className="card-title text-base px-1 rounded-md hover:bg-stone-100">
                        {post.userName}
                      </h3>
                      <h5 className="text-sm px-1">{post.date}</h5>
                    </div>
                  </div>
                  <div className=" ps-12   ">
                    <h1 className="font-bold text-2xl hover:text-indigo-700 ">
                      {post.title}
                    </h1>
                    <div className="flex gap-2 text-sm pt-2">
                      <h5 className="btn border-hidden bg-inherit shadow-none text-black text-base font-light btn-sm">
                        #{post.hashtag1}
                      </h5>
                      <h5 className="btn border-hidden btn-outline text-black text-base font-light hover:bg-green-100 hover:text-inherit btn-sm">
                        #{post.hashtag2}
                      </h5>
                      <h5 className="btn border-hidden btn-outline text-black text-base font-light hover:bg-purple-300 hover:text-inherit btn-sm">
                        #{post.hashtag3}
                      </h5>
                      <h5 className="btn border-hidden btn-outline text-black text-base font-light hover:bg-blue-300 hover:text-inherit btn-sm ">
                        #{post.hashtag4}
                      </h5>
                    </div>
                    <div className="card-actions pt-3  justify-between">
                      <button className="btn border-hidden btn-sm bg-inherit shadow-none flex px-2 ">
                        <a href="">👍</a>
                        <a href="">👀</a>
                        <a href="">🎉</a>
                        <a href="">😎</a>
                        <a href="">😂</a>
                        <h5 className="ps-1">15 Reactions</h5>
                      </button>
                      <button className=" btn border-hidden bg-inherit shadow-none   btn-sm flex  gap-1">
                        <a href="">💬</a>
                        <h5>1 comments</h5>
                      </button>
                      <button className="btn bg-transparent hover:bg-transparent border-hidden shadow-none  btn-sm flex  gap-1">
                        <h5 className="text-sm">{post.timeToRead}</h5>
                        <a
                          href=""
                          className="hover:bg-indigo-100 px-2 py-3 rounded-md"
                        >
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
