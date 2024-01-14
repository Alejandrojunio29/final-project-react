import SmallCardRight from "./SmallCardRight";

export default function RightSideHome() {
  return (
    <>
      <section className=" basis-1/5 hidden lg:flex">
        <ul className=" ">
          <li className=" list-item border rounded p-2 ">
            <h1 className=" font-semibold text-lg w-72 hover:text-indigo-500">
              #discuss
            </h1>
            <h5 className="text-xs">
              Discussion threads targeting the whole community{" "}
            </h5>
          </li>
          <SmallCardRight
            title="What was your win this week?"
            comments="6 comments"
          />
          <SmallCardRight
            title="What are you learning about this weekend"
            comments="3 comments"
          />
          <SmallCardRight
            title="What is your favorite open source alternative to proprietary software"
            comments="15 comments"
          />
          <SmallCardRight
            title="Mentor Matching Monthly"
            comments="25 comments"
          />
          <SmallCardRight
            title="2024 Web Development wish list"
            comments="4 comments"
          />
        </ul>
      </section>
    </>
  );
}
