import Footer from "@/Components/Layout/Footer"
import Header from "@/Components/Layout/Header"

type LayoutProps = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element) | Promise<unknown>
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}