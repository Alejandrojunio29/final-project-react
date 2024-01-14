export default function CardPostDetail(props) {
  return (
    <>
      <div className="card flex basis-1/4 bg-white grow">
        <div className="container ">
          <img
            src={props.postImg}
            alt="postImg"
            className="flex flex-wrap rounded-lg"
          />
        </div>
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
            <div className="container flex flex-wrap gap-10 text-sm pt-2">
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
              <h2>{props.postContent}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
