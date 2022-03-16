import Head from 'next/head';
import Section1 from '../sections/Section1';

export default function Home() {
  return (
    <div>
      <Head>
        <title>YAH! 2K22</title>
        <meta
          name='description'
          content='Yet Another Hackathon! (YAH!) is a 24 hour hackathon where the brightest minds and innovative souls come together to create solutions to real problems.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Hello world
      <Section1 />
    </div>
  );
}
