export default function ElementList(props) {
  return (
    <>
      <li className="hover:bg-indigo-100 hover:underline hover:text-indigo-500">
        <a>
          <img src={props.img} alt="" className="w-7" />
          {props.name}
        </a>
      </li>
    </>
  );
}
