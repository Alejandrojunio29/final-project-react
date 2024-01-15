import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PostCard(props) {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
      });
  }, []);

  return (
    <>
      <div
        onClick={() => {
          navigate(`/posts/${posts._id}`);
        }}
        className="card w-auto bg-base-100 shadow-xl flex flex-wrap cursor-pointer"
      >
        <figure>
          <img src={props.postImg} alt="postImg" />
        </figure>
        <div className="card-body">
          <div className="flex p-0 w-auto justify-items-start gap-2">
            <img
              src={props.userImg}
              alt="userImg"
              className="w-10 h-10 rounded-full "
            />
            <div>
              <h3 className="card-title text-base">{props.userName}</h3>
              <h5 className="text-sm">{props.date}</h5>
            </div>
          </div>
          <div className=" ps-12   ">
            <h1 className="font-bold text-2xl  ">{props.title}</h1>
            <div className="flex gap-10 text-sm pt-2">
              <h5 className="btn border-hidden bg-inherit btn-sm">
                #{props.hashtag1}
              </h5>
              <h5 className="btn border-hidden btn-outline btn-success btn-sm">
                #{props.hashtag2}
              </h5>
              <h5 className="btn border-hidden btn-outline btn-warning btn-sm">
                #{props.hashtag3}
              </h5>
              <h5 className="btn border-hidden btn-outline btn-accent btn-sm">
                #{props.hashtag4}
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
                <h5 className="text-sm">{props.timeToRead}</h5>
                <a href="" className="hover:bg-blue-200">
                  🕒
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
