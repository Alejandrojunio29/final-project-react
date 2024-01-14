export default function SmallCardRight(props) {
  return (
    <>
      <li className="border rounded p-2 hover:cursor-pointer ">
        <h2 className="hover:text-indigo-500 ">{props.title}</h2>
        <h5 className="text-xs   pt-1">{props.comments}</h5>
      </li>
    </>
  );
}
