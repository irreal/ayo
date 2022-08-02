import type { NextPage } from "next";
import Head from "next/head";
import useSound from "use-sound";

const Home: NextPage = () => {
  const [playAyo] = useSound("ayo.mp3");
  const [playLave] = useSound("lave.mp3");
  const [playKreni] = useSound("kreni.mp3");
  const [playCao] = useSound("cao.mp3");
  const ayoClick = () => {
    playAyo();
  };
  const laveClick = () => {
    playLave();
  };
  const kreniClick = () => {
    playKreni();
  };
  const caoClick = () => {
    playCao();
  };
  return (
    <div className="h-full">
      <Head>
        <title>Lave! Ustani, zapni, kreni! Ćao!</title>
        <meta name="description" content="Lave! Ustani, Zapni, Kreni! Ćao!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full flex flex-row w-full justify-center items-center gap-12">
        <div className="flex flex-col  gap-12">
          <button
            onClick={laveClick}
            className="button-shadow bg-red-500 rounded-full w-44 h-44 text-white text-4xl uppercase font-extrabold text-center"
          >
            <span>LAVE</span>
          </button>
          <button
            onClick={caoClick}
            className="button-shadow bg-red-500 rounded-full w-44 h-44 text-white text-4xl uppercase font-extrabold text-center"
          >
            <span>ĆAO!</span>
          </button>
        </div>
        <div className="flex flex-col gap-12">
          <button
            onClick={kreniClick}
            className="button-shadow bg-red-500 rounded-full w-44 h-44 text-white text-4xl uppercase font-extrabold text-center"
          >
            <span>KRENI</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
