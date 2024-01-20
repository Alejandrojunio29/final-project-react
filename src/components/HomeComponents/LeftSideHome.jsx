import ElementList from "./ElementList";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import IconLeftSide from "./IconLeftSide";

const TOKEN_KEY2 = "token";

export default function LeftSideHome() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_KEY2);
    if (token) {
      setIsloggedIn(true);
    }
  }, []);

  return (
    <>
      <section className=" hidden md:flex flex-col basis-1/8 gap-4 flex-wrap ">
        <div
          className={clsx("card px-4 bg-white rounded-md flex w-min", {
            hidden: isLoggedIn,
          })}
        >
          <h1 className="font-bold text-xl pt-2 flex w-60">
            DEV Community is a community of 1,241,857 amazing developers
          </h1>
          <h3 className="pt-3 pe-3">
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </h3>
          <div className=" flex flex-col gap-1 pt-3">
            <button
              onClick={() => {
                navigate("/createAccount");
              }}
              className={clsx(
                "btn w-full btn-outline btn-primary hover:underline"
              )}
            >
              Create Account
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className={clsx(
                "btn  btn-outline  border-none hover:bg-indigo-200 hover:text-indigo-600 hover:underline"
              )}
            >
              Log in
            </button>
          </div>
        </div>
        <ul className="menu   rounded-box  ">
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
          <h2 className="font-bold text-base ps-4 pt-4">Other</h2>
          <ElementList
            img="https://img.icons8.com/parakeet/48/thumb-up.png"
            name="Code of conduct"
          />
          <ElementList
            img="https://img.icons8.com/fluency/48/nerd.png"
            name="Privacy Policy"
          />
          <ElementList
            img="https://img.icons8.com/emoji/48/eyes-emoji.png"
            name="Terms of use"
          />
          <div className="flex flex-row justify-around pt-4">
            <IconLeftSide iconLink="https://img.icons8.com/ios-glyphs/30/twitter--v1.png" />
            <IconLeftSide iconLink="https://img.icons8.com/ios-filled/50/facebook--v1.png" />
            <IconLeftSide iconLink="https://img.icons8.com/ios-filled/50/github.png" />
            <IconLeftSide iconLink="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" />
            <IconLeftSide iconLink="https://img.icons8.com/ios-filled/50/twitch.png" />
            <IconLeftSide iconLink="https://img.icons8.com/windows/64/mastodon.png" />
          </div>
        </ul>
      </section>
    </>
  );
}
