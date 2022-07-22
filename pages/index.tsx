import type { NextPage } from 'next'
import Head from 'next/head'
import useSound from 'use-sound';

const Home: NextPage = () => {
  const [playAyo] = useSound('ayo.mp3');
  const [playLave] = useSound('lave.mp3');
  const [playKreni] = useSound('kreni.mp3');
  const [playCao] = useSound('cao.mp3');
  const ayoClick =()=> {
    playAyo();
  }
  const laveClick =()=> {
    playLave();
  }
  const kreniClick =()=> {
    playKreni();
  }
  const caoClick =()=> {
    playCao();
  }
  return (
    <div className='h-full'>
      <Head>
        <title>Ayooooo</title>
        <meta name="description" content="Ayoooo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-full flex flex-col gap-24  justify-center items-center'>
      <button onClick={ayoClick} className='button-shadow bg-red-500 rounded-full w-52 h-52 text-white text-4xl uppercase font-extrabold text-center'><span>AYOOO</span>
  </button>
      <button onClick={laveClick} className='button-shadow bg-red-500 rounded-full w-52 h-52 text-white text-4xl uppercase font-extrabold text-center'><span>LAVE</span>
  </button>
      <button onClick={kreniClick} className='button-shadow bg-red-500 rounded-full w-52 h-52 text-white text-4xl uppercase font-extrabold text-center'><span>KRENI</span>
  </button>
      <button onClick={caoClick} className='button-shadow bg-red-500 rounded-full w-52 h-52 text-white text-4xl uppercase font-extrabold text-center'><span>ĆAO!</span>
  </button>
      </main>
    </div>
  )
}

export default Home
