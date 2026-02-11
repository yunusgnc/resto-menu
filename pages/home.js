/**
 * /home adresi ana sayfaya (/) yönlendirir.
 * Böylece GET /home 404 hatası vermez.
 */
export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}

export default function HomePage() {
  return null;
}
