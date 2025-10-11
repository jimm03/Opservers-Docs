import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OPServers Docs',
  description: 'Comprehensive documentation for OPServers infrastructure and operations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app-wrapper">
          <Navigation />
          <div className="app-container">
            <Sidebar />
            <main className="main-content">
              <div className="content-area">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}