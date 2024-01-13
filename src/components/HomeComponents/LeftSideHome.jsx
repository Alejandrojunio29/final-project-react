import ElementList from "./ElementList";

export default function LeftSideHome() {
  return (
    <>
      <section className="hidden md:flex  basis-1/8 flex-wrap grow ">
        <ul className="menu bg-base-200 w-auto rounded-box grow ">
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
      </section>
    </>
  );
}
