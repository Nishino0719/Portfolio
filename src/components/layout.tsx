import type { ReactNode } from 'react'
import { Footer } from '../components/footer'
import { Header } from '../components/header'

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: 'peachpuff' }}>{props.children}</main>
      <Footer />
    </>
  )
}
