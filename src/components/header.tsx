import Link from 'next/link'
import React from 'react'

const items = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/works', label: 'Works' }
]

export const Header = (props) => {
  return (
    <header>
      <nav
        className={
          (props.transparent
            ? 'top-0 absolute z-50 w-full'
            : 'relative shadow-lg bg-white') +
          ' flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div
            className={
              'lg:flex flex-grow items-center bg-transparent lg:shadow-none'
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row mr-auto"></ul>
            {items.map(({ href, label }) => {
              return (
                <Link key={href} href={href}>
                  <a
                    className={
                      (props.transparent
                        ? 'text-white hover:text-gray-300'
                        : 'text-gray-800 hover:text-gray-600') +
                      ' px-3 py-4 lg:py-2 flex items-center uppercase font-semibold text-sm'
                    }
                    style={{ display: 'inline-block', padding: 12 }}
                  >
                    {label}
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}
