import Link from "next/link";
export default function Nawigacja() {
    return (
          <header>
            <nav className="nav">
              <Link href="/">Główna</Link>
              <Link href="/moje-zainteresowania">Moje zainteresowania</Link>
              <Link href="/ulubiona-gra">Ulubiona gra</Link>
              <Link href="/kontakt">Kontakt</Link>
              <Link href="/testowa">Test Strony</Link>
            </nav>
          </header>
    );
  }