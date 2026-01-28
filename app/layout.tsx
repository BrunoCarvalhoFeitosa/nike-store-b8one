import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Header } from "./components/layout/Header"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Nike.com",
  description: "Produtos, coleções, serviços e experiências únicas para te inspirar. Da Nike para você. Para atletas. Para o mundo. Nike.com.br",
  authors: [{ name: "Bruno Carvalho Feitosa", url: "https://github.com/brunocarvalhofeitosa"}]
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
