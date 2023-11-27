import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['300', '400', '500']
// })

export const metadata: Metadata = {
  title: 'CV - Thusara Senanayake',
  description: 'CV - Thusara Senanayake',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-white dark:bg-slate-900 text-black dark:text-slate-100 container mx-auto p-4 min-h-[100dvh]`}>
         <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  )
}
