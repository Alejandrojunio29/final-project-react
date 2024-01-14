export default function RightCardDetail(props) {
  return (
    <>
      <section className=" bg-white basis-1/5 p-4 rounded-lg ">
        <div className="flex p-0 w-auto justify-items-start gap-2 pb-3">
          <img
            src={props.userImg}
            alt="userImg"
            className="w-10 h-10 rounded-full "
          />
          <h3 className="card-title text-base">{props.userName} </h3>
        </div>
        <button className="btn btn-wide text-white text-base bg-blue-500 hover:bg-blue-700">
          Follow
        </button>
        <div className="pt-3 ">
          <h2>{props.personal} </h2>
          <h3 className="pt-2 font-semibold text-sm">EDUCATION</h3>
          <h4>{props.university}</h4>
          <h3 className="pt-2 font-semibold text-sm">PRONOUNS</h3>
          <h4>{props.pronouns}</h4>
          <h3 className="pt-2 font-semibold text-sm">JOB</h3>
          <h4>{props.job}</h4>
          <h3 className="pt-2 font-semibold text-sm">JOINED</h3>
          <h4>{props.joined}</h4>
        </div>
      </section>
    </>
  );
}
