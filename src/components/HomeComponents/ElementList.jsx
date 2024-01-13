export default function ElementList(props) {
  return (
    <>
      <li>
        <a>
          <img src={props.img} alt="" className="w-7" />
          {props.name}
        </a>
      </li>
    </>
  );
}
