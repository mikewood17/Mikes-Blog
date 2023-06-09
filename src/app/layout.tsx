import './globals.css'
import { Cabin } from 'next/font/google'
import Link from "next/link";

const cabin = Cabin({ subsets: ['latin'] })

export const metadata = {
  title: 'Mikes Personal Blog',
  description: 'Personal Blog by Mike Wood including Destiny 2 builds',
  robots: 'noindex',
  openGraph: {
    title: 'Mikes Blog with Destiny 2 Builds'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <div className='heroImgContainer'>
          <nav className='mainNav container'>
              <div className='nav-item'>
                <Link href='/'><h3 className='logo'>MW</h3></Link>
              </div>
              <div className='navSecond'>
                <Link className='nav-link' href='/'>Home</Link>
                <Link className='nav-link' href='/about'>About</Link>
                <Link className='nav-link' href='/blog'>Blogs</Link>
              </div>
          </nav>
          <div className='filter'>

          </div>
        </div>
        <div className='mainWrapper'>

          {children}
          
        </div>
        <div className='footer'>

        </div>
        
      </body>

    </html>
  )
}
