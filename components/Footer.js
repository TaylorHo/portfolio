import Link from './Link'

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 mb-4 flex flex-col items-center">
        <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
          <div className="mx-1">
            <Link href="mailto:taylor@hotay.dev" className="link-underline">
              Taylor Hoffmann{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
          {`•`}
          <div className="mx-1">From Brazil to the World!</div>
          {`•`}
          <div className="mx-1">
            <Link href="/contato" className="link-underline">
              Contato
            </Link>
          </div>
        </div>
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
          <div className="mx-1">
            <Link href="mailto:taylor@hotay.dev" className="link-underline">
              Taylor{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
