import React, {ReactNode, Fragment}   from 'react'
import Link                           from 'next/link'
import Head                           from 'next/head'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {BellIcon, MenuIcon, XIcon}    from '@heroicons/react/solid'
import Route                          from "../interfaces/route"
import Image                          from 'next/image'

type Props = {
  children?: ReactNode
  title?: string
}

const routes: Route[] = [
  {name: 'Homepage', href: '/'},
]

const pictureLoader = ({src}) => {
  return 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
}

const Layout = ({children, title = 'This is the default title'}: Props) => (
  <div className={"flex flex-col justify-between h-screen"}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <header>
      <Disclosure as={"nav"} className={"bg-emerald-800"}>
        {({open}) => (
          <>
            <div className={"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"}>
              <div className={"relative flex items-center justify-between h-16"}>
                <div className={"absolute inset-y-0 left-0 flex items-center sm:hidden"}>
                  <Disclosure.Button
                    className={"inline-flex items-center justify-center p-2 rounded-md text-emerald-400 " +
                      "hover:text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-inset " +
                      "focus:ring-white"}>
                    {open ? (
                      <XIcon className={"block h-6 w-6"} aria-hidden={"true"}/>
                    ) : (
                       <MenuIcon className={"block h-6 w-6"} aria-hidden={"true"}/>
                     )
                    }
                  </Disclosure.Button>
                </div>
                <div className={"flex-1 flex items-center justify-center sm:items-strecth sm:justify-start"}>
                  <Link href={"/"}>
                    <a className={"text-xl text-white pr-2 font-semibold no-underline"}>
                      Homi Demo
                    </a>
                  </Link>
                </div>
                <div className={"hidden sm:block sm:ml-6"}>
                  <div className="flex space-x-4">
                    {routes.map((route: Route) => (
                      <Link
                        key={route.name}
                        href={route.href}
                      >
                        <a
                          className={'text-emerald-300 hover:bg-emerald-700 hover:text-white px-3 py-2 rounded-md ' +
                            'no-underline text-sm font-medium'}>
                          {route.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                <div
                  className={"absolute inset-y-0 right-9 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"}>
                  <button
                    type={"button"}
                    className={"bg-emerald-800 p-1 rounded-full text-gray-400 hover-text-white " +
                      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-emerald-800 focus:ring-white"}>
                    <span className={"sr-only"}>View notifications</span>
                    <BellIcon className={"h-6 w-6"} aria-hidden="true"/>
                  </button>
                  <Menu as="div" className={"ml-3 relative"}>
                    <div>
                      <Menu.Button
                        className={"bg-emerald-800 flex text-sm rounded-full focus:outline-none focus:ring-2 " +
                          "focus:ring-offset-2 focus:ring-offset-emerald-800 focus:ring-white"}>
                        <span className={"sr-only"}>Open User Menu</span>
                        <Image
                          loader={pictureLoader}
                          className={"h-8 w-8 rounded-full"}
                          unoptimized={true}
                          width="35"
                          height="35"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-9 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="tranisition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          <Link
                            href="#"
                          >
                            <a className={'block px-4 py-2 text-sm text-emerald-700'}>
                              Your Profile
                            </a>
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            href={"#"}
                          >
                            <a className={'block px-4 py-2 text-sm text-emerald-700'}>
                              Settings
                            </a>
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            href={"#"}
                          >
                            <a className={'block px-4 py-2 text-sm text-emerald-700'}>
                              Sign Out
                            </a>
                          </Link>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <Disclosure.Panel className={"sm:hidden"}>
              <div className={"px-2 pt-2 pb-3 space-y-1"}>
                {routes.map((route: Route) => (
                  <Disclosure.Button
                    key={route.name}
                    as="a"
                    href={route.href}
                    className={'text-emerald-300 hover:bg-emerald-700 ' +
                      'hover:text-white block px-3 py-2 rounded-md text-base font-medium'}
                  >
                    {route.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
    {children}
    <footer className={"bg-emerald-800 text-white"}>
      <div className={"text-center p-4"}>
        <p className={"text-whitehite"}>
          Coded with &#10084;&#65039; by IakMastro &copy; <span>{new Date(Date.now()).getFullYear()}</span>
        </p>
      </div>
    </footer>
  </div>
)

export default Layout
