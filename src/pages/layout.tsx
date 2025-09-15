export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
      </head>
      <body>
        <header>
          <h1>My App Header</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>My App Footer</p>
        </footer>
      </body>
    </html>
  )
}