import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useEffect, useState } from "react";
import ElementList from "./HomeComponents/ElementList";

const TOKEN_KEY = "token";

export default function MainNavbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
      setIsloggedIn(true);
    }
  }, []);

  return (
    <>
      <div className="navbar flex ps-32 p-0    ">
        <div className="">
          <div className="dropdown  xs:flex sm:hidden  ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <ul className="menu bg-white w-auto rounded-box grow ">
                <ElementList
                  img="https://img.icons8.com/emoji/48/house-emoji.png"
                  name="Home"
                />
                <ElementList
                  img="https://img.icons8.com/color/48/microphone.png"
                  name="Podcasts"
                />
                <ElementList
                  img="https://img.icons8.com/external-prettycons-flat-prettycons/47/external-videocamera-multimedia-prettycons-flat-prettycons.png"
                  name="Videos"
                />
                <ElementList
                  img="https://img.icons8.com/office/16/tags.png"
                  name="Tags"
                />
                <ElementList
                  img="https://img.icons8.com/fluency/48/light--v1.png"
                  name="FAQ"
                />
                <ElementList
                  img="https://img.icons8.com/external-anggara-flat-anggara-putra/32/external-bag-retail-anggara-flat-anggara-putra.png"
                  name="Forem Shop"
                />
                <ElementList
                  img="https://img.icons8.com/fluency/48/like.png"
                  name="Advertise on DEV"
                />
                <ElementList
                  img="https://img.icons8.com/windows/32/dev.png"
                  name="About"
                />
                <ElementList
                  img="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-trumpet-summer-party-smashingstocks-flat-smashing-stocks.png"
                  name="Contact"
                />
                <ElementList
                  img="https://img.icons8.com/3d-fluency/94/open-book--v2.png"
                  name="Guides"
                />
                <ElementList
                  img="https://img.icons8.com/emoji/48/thinking-face.png"
                  name="Software comparisons"
                />
              </ul>
            </ul>
          </div>
        </div>
        <div className="  gap-2">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt=""
            className="w-12 cursor-pointer  "
            onClick={() => {
              navigate("/");
            }}
          />
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md input-sm  hover:border-indigo-500 hidden md:flex"
          />
        </div>

        <div className={clsx("navbar justify-end pe-28 gap-2")}>
          <button
            onClick={() => {
              navigate("/createPost");
            }}
            className={clsx("btn  btn-outline btn-primary hover:underline", {
              hidden: !isLoggedIn,
            })}
          >
            Create Post
          </button>

          <button
            onClick={() => {
              navigate("/login");
            }}
            className={clsx(
              "btn  btn-outline  border-none hover:bg-indigo-200 hover:text-indigo-600 hover:underline",
              {
                hidden: isLoggedIn,
              }
            )}
          >
            Log in
          </button>
          <button
            onClick={() => {
              navigate("/createAccount");
            }}
            className={clsx("btn  btn-outline btn-primary hover:underline", {
              hidden: isLoggedIn,
            })}
          >
            Create Account
          </button>
          <div>
            <img
              src="https://img.icons8.com/carbon-copy/100/bell--v1.png"
              alt=""
              className={clsx(
                "w-10 h-w-10 hover:bg-indigo-200 hover:rounded-md",
                {
                  hidden: !isLoggedIn,
                }
              )}
            />
          </div>
          <div
            className={clsx("dropdown dropdown-bottom dropdown-end", {
              hidden: !isLoggedIn,
            })}
          >
            <a tabIndex={0}>
              <img
                src="https://img.freepik.com/vector-premium/icono-perfil-usuario-estilo-plano-ilustracion-vector-avatar-miembro-sobre-fondo-aislado-concepto-negocio-signo-permiso-humano_157943-15752.jpg"
                alt="avatar"
                className="rounded-full mt-z w-11 h-w-11 hover:outline hover:outline-indigo-200/50"
              />
            </a>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-white w-52"
            >
              <li
                onClick={() => {
                  navigate("/createPost");
                }}
                className="border-b border-gray-300"
              >
                <p>Create a post</p>
              </li>
              <li>
                <a
                  onClick={() => {
                    localStorage.removeItem("token");
                    sessionStorage.removeItem("token");
                    location.reload();
                  }}
                >
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
