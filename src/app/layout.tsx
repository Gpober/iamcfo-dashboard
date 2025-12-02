import './globals.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'I AM CFO Dashboard',
  description: 'Live financial insights for property operators',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* RB2B Visitor Identification */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(key) {
                if (window.reb2b) return;
                window.reb2b = {loaded: true};
                var s = document.createElement("script");
                s.async = true;
                s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";
                document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);
              }("0NW1GHZ7MDO4");
            `
          }}
        />
      </head>
      <body className={inter.className + ' bg-gray-50 font-sans'}>
        {/* Demo Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 text-center text-sm">
          <span className="font-medium">🎯 You're viewing sample data.</span>
          {' '}
          <a 
            href="https://calendly.com/gpober/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline font-bold hover:text-blue-100"
          >
            Book a free demo
          </a>
          {' '}to see YOUR numbers →
        </div>
        
        <nav className="bg-white shadow px-6 py-4 flex space-x-4">
          <Link href="/">Dashboard</Link>
          <Link href="/reservations">Reservations</Link>
          <Link href="/financials">Financials</Link>
          <Link href="/payroll">Payroll</Link>
          <Link href="/statements">Statements</Link>
        </nav>
        <main className="px-6 py-4">{children}</main>
      </body>
    </html>
  );
}
