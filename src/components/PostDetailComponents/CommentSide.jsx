export default function CommentSide(props) {
  return (
    <>
      <div>
        <div className="flex flex-row justify-between bg-white -lg pe-8">
          <h1 className="font-bold text-lg ps-8 pt-4">Top Comments</h1>
          <button className="btn bg-white ">Suscribe</button>
        </div>
        <div className="flex flex-row bg-white p-8 gap-4">
          <img src={props.userImg} alt="" className="w-10 h-10 rounded-full " />
          <textarea
            className="textarea w-full  "
            placeholder="Add to the discussion"
          ></textarea>
        </div>
      </div>
    </>
  );
}
