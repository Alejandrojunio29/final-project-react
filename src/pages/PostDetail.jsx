import MainNavbar from "../components/MainNavbar";
import CardPostDetail from "../components/PostDetailComponents/CardPostDetail";
import RightCardDetail from "../components/PostDetailComponents/RightCardDetail";
import CommentSide from "../components/PostDetailComponents/CommentSide";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data.data);
        console.log("este es el id", id);
      });
  }, [id]);
  return (
    <>
      <MainNavbar />
      <section className="container mx-auto bg-stone-100 grid  grid-cols-[1fr_7fr_2fr] gap-4 justify-center pt-3">
        <aside className="hidden sm:grid place-content-center  gap-8">
          <img
            src="https://img.icons8.com/ios/50/like--v1.png"
            alt=""
            className="hover:bg-red-500 w-6"
          />
          <a href="" className="">
            18
          </a>
          <a href="" className="hover:bg-blue-200">
            💬
          </a>
          <a href="" className="">
            02
          </a>
          <a href="" className="hover:bg-blue-200">
            📤
          </a>
          <a href="" className="">
            11
          </a>
          <img
            src="https://img.icons8.com/ios-filled/50/ellipsis.png"
            alt=""
            className="w-4 hover:cursor-pointer hover:bg-slate-300 rounded-full"
          />
        </aside>
        <main className="flex flex-col ">
          <CardPostDetail
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
            postContent={post.postContent}
          />
          {/* 
          <CardPostDetail
            className=""
            postImg="https://res.cloudinary.com/practicaldev/image/fetch/s--i76U32xm--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q5dd9j90v0kizkgsq0xw.jpg"
            userImg="https://xsgames.co/randomusers/assets/avatars/male/22.jpg"
            userName="Juano Lopez"
            date="jan 13"
            title="post de prueba"
            hashtag1="vamos"
            hashtag2="a ver"
            hashtag3="si"
            hashtag4="funciona"
            timeToRead="7 min"
            postContent="Este es el texto del contenido"
          /> */}
          <CommentSide userImg="https://xsgames.co/randomusers/assets/avatars/male/22.jpg" />
        </main>

        <aside className="hidden lg:grid  pe-3">
          <RightCardDetail
            userImg="https://xsgames.co/randomusers/assets/avatars/male/22.jpg"
            personal="Ingeniero, Mexicano, me gustan los videojuegos"
            userName="Juano Lopez"
            university="Harvard"
            pronouns="El, Macho"
            job="the boss"
            joined="jul 3, 2017"
          />
        </aside>
      </section>
    </>
  );
}
