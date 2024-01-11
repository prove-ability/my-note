/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client'

import Image from 'next/image'
import Avatar from '@/components/Avatar'
import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

export default function NavBar() {
  useEffect(() => {
    themeChange(false)

    const html = document.querySelector('html')
    if (html?.getAttribute('data-theme') === 'dark') {
      html.setAttribute('data-theme', 'forest')
    } else {
      html?.setAttribute('data-theme', 'fantasy')
    }
  }, [])

  const { data: session } = useSession()

  if (!session) {
    return <span className="loading loading-spinner loading-lg" />
  }

  const handleClickLogout = () => {
    signOut()
  }

  const handleThemeChange = (event: React.MouseEvent<HTMLLabelElement>) => {
    event.preventDefault()
    const html = document.querySelector('html')
    if (html?.getAttribute('data-theme') === 'fantasy') {
      html.setAttribute('data-theme', 'forest')
    } else {
      html?.setAttribute('data-theme', 'fantasy')
    }
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            type="button"
            aria-label="toggle menu"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            // tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/test">Item 1</a>
            </li>
            {/* <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li> */}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="/protected">
          my note
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/test">Item 1</a>
          </li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <label
          className="swap swap-rotate btn btn-ghost"
          onClick={handleThemeChange}
        >
          <input type="checkbox" />
          <Image
            className="swap-on fill-current w-10 h-10"
            src="/image/layout/sun.svg"
            width={32}
            height={32}
            alt="sun"
          />
          <Image
            className="swap-off fill-current w-10 h-10"
            src="/image/layout/moon.svg"
            width={32}
            height={32}
            alt="moon"
          />
        </label>
        <h5 className="text-sm">{session.user?.name}</h5>
        <Avatar />
        <button className="btn" type="button" onClick={handleClickLogout}>
          로그아웃
        </button>
      </div>
    </div>
  )
}
