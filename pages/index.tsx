import type { NextPage } from 'next'
import Head from 'next/head'
import useSound from 'use-sound';

const Home: NextPage = () => {
  const [play] = useSound('ayo.mp3');
  const ayoClick =()=> {
    play();
  }
  return (
    <div className='h-full'>
      <Head>
        <title>Ayooooo</title>
        <meta name="description" content="Ayoooo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-full flex flex-col justify-center items-center'>
      <button onClick={ayoClick} id="launch" className='bg-red-500 rounded-full w-52 h-52 text-white text-4xl uppercase font-extrabold text-center'><span>AYOOO</span>
  </button>
      </main>
    </div>
  )
}

export default Home
