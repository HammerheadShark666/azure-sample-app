export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <h1>Next Js Examples</h1>
        <main>{children}</main>
      </body>
    </html>
  )
}