import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Smart Resort 360",
  description: "A smarter way to manage resort operations and guest experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-surface-950">
      <body>{children}</body>
    </html>
  )
}

export const viewport = {
  themeColor: "#0a0a0f",
}
