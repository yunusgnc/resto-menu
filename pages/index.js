import Head from 'next/head';
import Menu from '../components/Menu';
import HamburgerMenu from '../components/HamburgerMenu';

export default function Home() {
  return (
    <>
      <Head>
        <title>Restaurant Menü</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="description" content="Restoran menü" />
      </Head>

      <HamburgerMenu />

      <header>
        <h1>MENÜ</h1>
      </header>

      <Menu />

      <footer>
        © 2026 Restoran Menü
      </footer>
    </>
  );
}
