import '../globals.css'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Admin Messages</title>
        <meta name="description" content="Contact Messages Admin Dashboard" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
