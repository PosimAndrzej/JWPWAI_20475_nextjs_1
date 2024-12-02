import Link from 'next/link';
import './styles/globals.css';
import Nawigacja from './nawigacja';

export const metadata = {
  title: 'Moja aplikacja',
  description: 'Strona stworzona w Next.js',
};
export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <Nawigacja />
        {children}
        <footer>
          <p>&copy; Lab10. Posim Andrzej 20475.</p>
        </footer>
      </body>
    </html>
  );
}
