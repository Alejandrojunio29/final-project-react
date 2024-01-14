export default function ButtonLogin(props) {
  return (
    <>
      <div className="flex grow pt-3 ">
        <button className="btn btn-wide bg-transparent flex grow ">
          <img src={props.logoImg} alt="" className="w-6 " />
          Continue with {props.brand}
        </button>
      </div>
    </>
  );
}
