import Link from 'next/link';

export default function Lab9() {
  return (
    <main>
      <div>
        <h2>O mnie</h2>
        <p>Mam na imię Andrzej.</p>
        <p>Jestem studentem informatyki.</p>
        <p>Jeśli chcesz się czegoś więcej o mnie dowiedzieć zapraszam do sprawdzenia poniższych stron.</p>
        <ul>
          <li><Link href="/moje-zainteresowania">Moje zainteresowania</Link></li>
          <li><Link href="/ulubiona-gra">Ulubiona gra</Link></li>
          <li><Link href="/kontakt">Kontakt</Link></li>
        </ul>
      </div>
    </main>
    
  );
}
