import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import useSound from "use-sound";
import { PlayFunction } from "use-sound/dist/types";

type image = {
  src: string;
  timecode: number;
};
type effect = {
  title: string;
  soundSrc: string;
  images: image[];
};

const effects: effect[] = [
  {
    title: "BYE",
    soundSrc: "bye/bye.mp3",
    images: [
      { src: "bye/bye1.png", timecode: 130 },
      {
        src: "bye/bye2.png",
        timecode: 5720,
      },
      {
        src: "bye/bye3.png",
        timecode: 7103,
      },
      {
        src: "",
        timecode: 9103,
      },
    ],
  },
  {
    title: "Ćao",
    soundSrc: "cao/cao.mp3",
    images: [
      { src: "cao/cao1.png", timecode: 130 },
      {
        src: "",
        timecode: 1103,
      },
    ],
  },
  {
    title: "Ayo",
    soundSrc: "ayo/ayo.mp3",
    images: [
      { src: "ayo/ayo1.png", timecode: 30 },
      {
        src: "",
        timecode: 1103,
      },
    ],
  },
];

const preloadHrefs = effects
  .map((eff) => eff.images.filter((i) => i && i.src).map((i) => i.src))
  .flat();
console.log(preloadHrefs);

const Home: NextPage = () => {
  const [imgSrc, setImgSrc] = useState("");
  const playFns: { [key: string]: PlayFunction } = {};
  for (const effect of effects) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [play] = useSound(effect.soundSrc);
    playFns[effect.title] = play;
  }

  const playSound = (title: string) => {
    const effect = effects.find((ef) => ef.title === title);
    playFns[title]();
    effect?.images.forEach((i) => {
      setTimeout(() => {
        setImgSrc(i.src);
      }, i.timecode);
    });
  };
  return (
    <div className="h-full">
      <Head>
        <title>Victory Effects</title>
        <meta name="description" content="Victory Effects" />
        <link rel="icon" href="/favicon.ico" />
        {preloadHrefs.map((href) => (
          <link key={href} rel="preload" as="image" href={href}></link>
        ))}
      </Head>

      <main className="h-full w-full relative">
        <div className="h-full flex flex-col w-full justify-center items-center gap-12">
          {effects.map((ef) => (
            <button
              key={ef.title}
              onClick={() => playSound(ef.title)}
              className="button-shadow bg-red-500 rounded-full w-44 h-44 text-white text-4xl uppercase font-extrabold text-center"
            >
              <span>{ef.title}</span>
            </button>
          ))}
        </div>
        {imgSrc && (
          <img
            alt="illustration of the sound effect"
            src={imgSrc}
            className="object-contain h-full absolute left-0 top-0 w-full max-h-screen"
          />
        )}
      </main>
    </div>
  );
};

export default Home;
