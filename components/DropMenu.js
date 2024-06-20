import { Fragment } from 'react'
import { Menu, Transition, MenuButton } from '@headlessui/react'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import Link from './Link'
import {
  CodeIcon,
  HomeIcon,
  Pencil1Icon,
  HamburgerMenuIcon,
  FrameIcon,
  BarChartIcon,
  Link2Icon,
  PersonIcon,
  ArchiveIcon,
  RocketIcon,
  DrawingPinIcon,
} from '@radix-ui/react-icons'
import useSound from 'use-sound'

export default function DropMenu() {
  const [ThemeSound] = useSound('/static/sounds/page-change.mp3')

  return (
    <Menu as="div" className="relative z-10 inline-block text-left ">
      <div>
        <MenuButton className=" ml-2 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:bg-violet-400 hover:ring-1 dark:bg-zinc-700 dark:ring-violet-700 dark:hover:bg-violet-600">
          <motion.div
            className="flex h-8 w-8 items-center justify-center p-2"
            whileTap={{
              scale: 0.5,
            }}
            transition={{ duration: 0.1, ease: 'easeIn' }}
            aria-label="Menu de Opções"
            type="button"
          >
            <HamburgerMenuIcon className="h-4 w-4" />
          </motion.div>
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        afterEnter={() => {
          ThemeSound()
        }}
        afterLeave={() => {
          ThemeSound()
        }}
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-zinc-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-zinc-700 dark:bg-zinc-800 ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/"
                  className={classNames(
                    active
                      ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                      : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className="flex flex-row">
                    <HomeIcon className="mr-4 mt-0.5" /> Início
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/artigos"
                  className={classNames(
                    active
                      ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                      : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className="flex flex-row">
                    <Pencil1Icon className="mr-4 mt-0.5" /> Artigos
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/snippets"
                  className={classNames(
                    active
                      ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                      : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className="flex flex-row">
                    <CodeIcon className="mr-4 mt-0.5" /> Snippets
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/projetos"
                  className={classNames(
                    active
                      ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                      : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className="flex flex-row">
                    <ArchiveIcon className="mr-4 mt-0.5" /> Projetos
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/sobre"
                  className={classNames(
                    active
                      ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                      : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className="flex flex-row">
                    <PersonIcon className="mr-4 mt-0.5" /> Sobre
                  </div>
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/contato"
                  className={classNames(
                    active
                      ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                      : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className="flex flex-row">
                    <Link2Icon className="mr-4 mt-0.5" /> Contato
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/tags"
                  className={classNames(
                    active
                      ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                      : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className="flex flex-row">
                    <FrameIcon className="mr-4 mt-0.5" /> Tags
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/stats"
                  className={classNames(
                    active
                      ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                      : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className="flex flex-row">
                    <BarChartIcon className="mr-4 mt-0.5" /> Estatísticas
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/jornada"
                  className={classNames(
                    active
                      ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                      : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className="flex flex-row">
                    <RocketIcon className="mr-4 mt-0.5" /> Jornada
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/stack"
                  className={classNames(
                    active
                      ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                      : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className="flex flex-row">
                    <DrawingPinIcon className="mr-4 mt-0.5" /> Minha Stack
                  </div>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
