import Link from 'next/link';
import '../styles/globals.css';


export default function Layout({ children }) {
  return (
        <main style={{color: 'red', fontSize: '20px'}}>{children}</main>
  );
}
