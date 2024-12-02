import Link from 'next/link';
import '../styles/globals.css';

export const metadata = {
  title: 'Moja aplikacja',
  description: 'Strona stworzona w Next.js',
};

export default function Layout({ children }) {
  return (
        <main style={{color: 'blue', fontSize: '24px'}}>{children}</main>
  );
}
