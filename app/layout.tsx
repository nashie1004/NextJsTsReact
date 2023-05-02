import './app.scss'
import Context from './context'

export const metadata = {
  title: 'Random ts next.js app',
  description: 'Random ts next.js app descrip',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Context>
          {children}
        </Context>
      </body>
    </html>
  )
}
