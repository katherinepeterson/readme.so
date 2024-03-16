import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import Menu from './icons/Menu'
import Close from './icons/Close'
import useDeviceDetect from '../hooks/useDeviceDetect'
import { useEffect, useState, useRef } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const Nav = ({
  sectionTemplates,
  selectedSectionSlugs,
  setSelectedSectionSlugs,
  setSectionSlugs,
  templates,
  setTemplates,
  setShowModal,
  getTemplate,
  onMenuClick,
  isDrawerOpen,
  darkMode,
  setDarkMode,
  focusedSectionSlug,
}) => {
  const [files, setFiles] = useState([])
  const { saveBackup } = useLocalStorage()
  const fileInput = useRef(null)

  /**
   * Enum for handling supported file type exports.
   * @readonly
   * @enum string
   */
  const FileExports = Object.freeze({
    JSON: 'json',
    MD: 'md',
  })

  const markdown = selectedSectionSlugs.reduce((acc, section) => {
    const template = getTemplate(section)
    if (template) {
      return `${acc}${template.markdown}`
    } else {
      return acc
    }
  }, ``)

  const { isMobile } = useDeviceDetect()

  const downloadFile = (fileExtension) => {
    const selected_slugs = localStorage.getItem('current-slug-list')
    const export_template = templates.filter((t) => selected_slugs.includes(t.slug))

    const a = document.createElement('a')
    const blob = new Blob(
      fileExtension == 'md'
        ? [markdown]
        : fileExtension == 'json'
        ? [JSON.stringify(export_template)]
        : []
    )

    a.href = URL.createObjectURL(blob)
    a.download = `README.${fileExtension}`
    a.click()

    if (isMobile && isDrawerOpen) {
      onMenuClick()
    }
    setShowModal(true)
  }

  const uploadJSON = (e) => {
    const fileReader = new FileReader()
    fileReader.readAsText(e.target.files[0], 'UTF-8')
    fileReader.onload = (e) => {
      setFiles(JSON.parse(e.target.result))
    }
  }

  const validate_files = () => {
    return files.filter((f) => {
      const required_keys = ['slug', 'name', 'markdown']
      const keys = Object.keys(f)

      if (keys.length != required_keys.length) {
        return false
      }

      return keys.every((key) => required_keys.includes(key))
    })
  }

  useEffect(() => {
    if (files.length > 0) {
      const files = validate_files()
      const selected_slugs = files.map((f) => f.slug)
      const slugs = sectionTemplates.map((s) => s.slug).filter((s) => !selected_slugs.includes(s))

      const temp = templates.filter((t) => !selected_slugs.includes(t.slug))
      templates = [...temp, ...files]

      localStorage.setItem('current-slug-list', selected_slugs.join(','))
      setSelectedSectionSlugs(selected_slugs)
      setSectionSlugs(slugs)
      saveBackup(templates)
      setTemplates(templates)
    }
  }, [files])

  const { t } = useTranslation('editor')

  return (
    <nav className="flex justify-between p-4 bg-gray-800 align-center w-full">
      <Link href="/">
        <a className="focus:outline-none focus:ring-2 focus:ring-emerald-400 flex items-center">
          <img className="w-auto h-12" src="readme.svg" alt="readme.so logo" />
        </a>
      </Link>
      <div className="flex flex-row-reverse gap-3 md:flex-row">
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
        {/* visible for md and above */}
        {focusedSectionSlug !== 'noEdit' && (
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Color Mode"
            className="toggle-dark-mode focus:outline-none transition transform motion-reduce:transition-none motion-reduce:transform-none  pr-4"
          >
            <Image
              className="w-auto h-8 mr-2"
              alt={darkMode ? 'dark' : 'light'}
              src={darkMode ? '/toggle_sun.svg' : '/toggle_moon.svg'}
              width={40}
              height={40}
            />
          </button>
        )}

        <input
          type="file"
          accept=".json"
          className="hidden"
          ref={fileInput}
          onChange={uploadJSON}
        />

        <button
          type="button"
          aria-label="Import JSON"
          title={t('nav-import')}
          className="flex flex-row relative items-center mr-4 md:mr-0 px-4 py-2 text-sm font-bold tracking-wide text-white border border-transparent rounded-md shadow-sm bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-500"
          onClick={() => fileInput.current.click()}
        >
          <img className="w-auto h-6 cursor-pointer" src="download.svg" />
          <span className="hidden md:inline-block ml-2">{t('nav-import')}</span>
        </button>

        <button
          type="button"
          aria-label="Export JSON"
          title={t('nav-export')}
          className="flex flex-row relative items-center mr-4 md:mr-0 px-4 py-2 text-sm font-bold tracking-wide text-white border border-transparent rounded-md shadow-sm bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-500"
          onClick={() => downloadFile(FileExports.JSON)}
        >
          <img className="w-auto h-6 cursor-pointer" src="download.svg" />
          <span className="hidden md:inline-block ml-2">{t('nav-export')}</span>
        </button>

        <button
          type="button"
          aria-label="Download Markdown"
          title={t('nav-download')}
          className="flex flex-row relative items-center mr-4 md:mr-0 px-4 py-2 text-sm font-bold tracking-wide text-white border border-transparent rounded-md shadow-sm bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-500"
          onClick={() => downloadFile(FileExports.MD)}
        >
          <img className="w-auto h-6 cursor-pointer" src="download.svg" />
          <span className="hidden md:inline-block ml-2">{t('nav-download')}</span>
        </button>
      </div>
    </nav>
  )
}
