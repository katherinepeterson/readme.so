import { useTranslation } from 'next-i18next'

const languageSupports = [
  {
    label: 'English',
    route: '/',
  },
  {
    label: 'Français',
    route: '/fr',
  },
  {
    label: 'Español',
    route: '/es',
  },
  {
    label: 'Italiano',
    route: '/it',
  },
  {
    label: 'Türkçe',
    route: '/tr',
  },
  {
    label: 'Filipino',
    route: '/fil',
  },
  {
    label: 'Nederlands',
    route: '/nl',
  },
  {
    label: 'Deutsch',
    route: '/de',
  },
]

export function LanguageDropDown({ posts }) {
  const { t } = useTranslation('common')

  return (
    <div className="relative inline-block group">
      <button className="inline-flex items-center px-4 py-2 text-gray-800 rounded">
        <span className="mr-1">{t('language')}</span>
        <svg
          className="w-3 h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul className="absolute text-gray-800 pt-1 origin-top transform-gpu transition-transform scale-y-0 group-hover:scale-y-100 focus-within:scale-y-100">
        {languageSupports.map(({ label, route }, index) => (
          <li key={`${label}_${index}`} className="">
            <a
              className="block w-32 px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-emerald-400"
              href={route}
            >
              {label}
            </a>
          </li>
        ))}
        <li className="">
          <a
            className="block w-32 px-4 py-2 text-xs break-words whitespace-no-wrap bg-gray-200 hover:bg-emerald-400"
            href="https://github.com/katherinepeterson/readme.so/issues/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('translation-error')}
          </a>
        </li>
      </ul>
    </div>
  )
}
