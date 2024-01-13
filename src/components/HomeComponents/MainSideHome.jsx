import PostCard from "./PostCard";

export default function MainSideHome() {
  return (
    <>
      <section className="flex basis-1/2 flex-wrap grow">
        <PostCard
          postImg="https://res.cloudinary.com/practicaldev/image/fetch/s--i76U32xm--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q5dd9j90v0kizkgsq0xw.jpg"
          userImg="https://xsgames.co/randomusers/assets/avatars/male/22.jpg"
          userName="Juano Lopez"
          date="jan 13"
          title="post de prueba"
          hashtag1="vamos"
          hashtag2="a ver"
          hashtag3="si"
          hashtag4="funciona"
          timeToRead="mucho tiempo"
        />
      </section>
    </>
  );
}
