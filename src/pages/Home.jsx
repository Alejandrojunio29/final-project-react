import MainNavbar from "../components/MainNavbar";
import LeftSideHome from "../components/HomeComponents/LeftSideHome";
import MainSideHome from "../components/HomeComponents/MainSideHome";
import RightSideHome from "../components/HomeComponents/RightSideHome";

export default function Home() {
  return (
    <>
      <MainNavbar />
      <main className="  bg-stone-100  justify-center grow  ">
        <section className="flex flex-row flex-wrap justify-center pt-3 gap-2 xl:px-28 lg:px-14       ">
          <LeftSideHome />
          <MainSideHome />
          <RightSideHome />
        </section>
      </main>
    </>
  );
}
