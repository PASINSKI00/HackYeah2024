import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Drzewa są w pyte</h1>
      <Link href='/kalkulator'>Przejdź do kalkulatora</Link>
    </main>
  );
}
