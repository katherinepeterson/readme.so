import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import Menu from './icons/Menu'
import Close from './icons/Close'
import useDeviceDetect from '../hooks/useDeviceDetect'

export const Nav = ({
  selectedSectionSlugs,
  setShowModal,
  getTemplate,
  onMenuClick,
  isDrawerOpen,
  darkMode,
  setDarkMode,
  focusedSectionSlug,
}) => {
  const markdown = selectedSectionSlugs.reduce((acc, section) => {
    const template = getTemplate(section)
    if (template) {
      return `${acc}${template.markdown}`
    } else {
      return acc
    }
  }, ``)

  const { isMobile } = useDeviceDetect()

  const downloadMarkdownFile = () => {
    const a = document.createElement('a')
    const blob = new Blob([markdown])
    a.href = URL.createObjectURL(blob)
    a.download = 'README.md'
    a.click()
    if (isMobile && isDrawerOpen) {
      onMenuClick()
    }
    setShowModal(true)
  }

  const { t } = useTranslation('editor')

  return (
    <nav className="flex justify-between p-4 bg-gray-800 align-center w-full">
      <Link href="/">
        <a className="focus:outline-none focus:ring-2 focus:ring-emerald-400 flex items-center">
          <img className="w-auto h-12 text-white" src="/readme.svg" alt="readme.so logo" />
        </a>
      </Link>
      <div className="flex flex-row-reverse md:flex-row">
        {/* visible for sm only */}
        <button
          className="focus:outline-none focus:ring-2 focus:ring-emerald-400"
          onClick={onMenuClick}
        >
          {isDrawerOpen ? (
            <Close className="w-10 h-10 md:hidden fill-current text-emerald-500" />
          ) : (
            <Menu className="w-10 h-10 md:hidden fill-current text-emerald-500" />
          )}
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Color Mode"
          className="toggle-dark-mode focus:outline-none transition transform motion-reduce:transition-none motion-reduce:transform-none  pr-4"
        >
          <Image
            title="Theme toggle"
            className="w-auto h-8 mr-2 text-white"
            alt={darkMode ? 'dark' : 'light'}
            src={darkMode ? '/toggle_sun.svg' : '/toggle_moon.svg'}
            width={40}
            height={40}
          />
        </button>

        <button
          type="button"
          aria-label="Download Markdown"
          className="flex flex-row relative items-center mr-4 md:mr-0 px-4 py-2 text-sm font-bold tracking-wide text-white border border-transparent rounded-md shadow-sm bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-500"
          onClick={downloadMarkdownFile}
        >
          <img className="w-auto h-6 cursor-pointer" src="/download.svg" />
          <span className="hidden md:inline-block ml-2">{t('nav-download')}</span>
        </button>
      </div>
    </nav>
  )
}
