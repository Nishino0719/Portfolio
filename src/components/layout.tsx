import type { ReactNode } from 'react'
import { Header } from '../components/header'

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Header transparent />
      <main style={{ backgroundColor: '#F3F4F6' }}>{props.children}</main>
    </>
  )
}
