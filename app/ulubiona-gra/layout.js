import Link from 'next/link';
import '../styles/globals.css';

export const metadata = {
  title: 'Moja aplikacja',
  description: 'Strona stworzona w Next.js',
};

export default function Layout({ children }) {
  return (
        <main style={{color: 'purple', fontSize: '28px'}}>{children}</main>
  );
}