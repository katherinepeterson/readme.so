import Head from 'next/head'
import Image from 'next/image'
import { LanguageDropDown } from '../components/LanguageDropDown'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Home = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <script
          async
          defer
          data-domain="readme.so"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <div className="bg-gray-50">
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 w-full h-full" aria-hidden="true">
            <div className="relative h-full">
              <svg
                className="absolute transform right-full translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width={404} height={784} fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
              </svg>
              <svg
                className="absolute transform left-full -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width={404} height={784} fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
              </svg>
            </div>
          </div>
          <div className="relative pt-6 pb-16 sm:pb-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
              <nav
                className="relative flex items-center justify-between md:justify-start"
                aria-label="Global"
              >
                <Link href="/">
                  <img
                    className="w-auto h-12 cursor-pointer"
                    src="/readme.svg"
                    alt="readme.so logo"
                  />
                </Link>

                <div className="relative items-center w-28 z-10 md:absolute md:inset-y-0 md:right-0">
                  <LanguageDropDown />
                </div>
              </nav>
            </div>

            <div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">{t('title')}</span>
                  <span className="block text-emerald-500">{t('readme')}</span>
                </h1>
                <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  {t('description')}
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <div className="flex flex-col items-center">
                  <span className="inline-flex rounded-md shadow ">
                    <Link href="/editor">
                      <a className="inline-flex items-center px-4 py-2 font-medium text-xl bg-emerald-500 hover:bg-emerald-400 border border-transparent rounded-lg text-white w-[250px] h-[54px] justify-center">
                        {t('get-started')}
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center mt-3">
                <a
                  className="group inline-flex items-center px-4 py-2 text-sm  bg-gray-50 border rounded-lg text-gray-500 w-[116px] h-[35px] justify-center transition-colors hover:bg-gray-100"
                  aria-label="Sponsor octokatherine"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sponsors/octokatherine"
                >
                  <div className="">
                    <img
                      className="w-4 h-4 mr-3 transform transition-transform group-hover:scale-110"
                      src="heart.svg"
                      alt="sponsorship heart"
                    />
                  </div>
                  {t('Sponsor')}
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col" aria-hidden="true">
              <div className="flex-1" />
              <div className="flex-1 w-full bg-gray-800" />
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
              <Image
                className="relative rounded-lg shadow-lg"
                src="/screenshot.png"
                alt="App screenshot"
                height={700}
                width={1200}
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-800">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold tracking-wide text-center text-gray-400">
              {t('made-with-love')}&#9825;{t('by')}{' '}
              <a
                className="hover:text-emerald-500"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/katherinecodes"
              >
                Katherine Oelsner
              </a>
            </h2>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/octokatherine/readme.so"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github logo"
              >
                <img className="w-auto h-6" src="/github.svg" alt="github logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer'])),
  },
})

export default Home
