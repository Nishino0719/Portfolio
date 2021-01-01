import type { ReactNode } from 'react'
import { Header } from '../components/header'

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#fafafa' }}>{props.children}</main>
    </>
  )
}
