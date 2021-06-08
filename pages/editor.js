import Head from 'next/head'
import { useEffect, useState } from 'react'

import { DownloadModal } from '../components/DownloadModal'
import { EditorColumn } from '../components/EditorColumn'
import { Nav } from '../components/Nav'
import { PreviewColumn } from '../components/PreviewColumn'
import { SectionsColumn } from '../components/SectionsColumn'
import sectionTemplates from '../data/index'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Editor({ sectionTemplate }) {
  const { t } = useTranslation('editor')

  const [selectedSectionSlugs, setSelectedSectionSlugs] = useState([])
  const [sectionSlugs, setSectionSlugs] = useState(sectionTemplate.map((t) => t.slug))
  const [focusedSectionSlug, setFocusedSectionSlug] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [templates, setTemplates] = useState(sectionTemplate)
  const [isMobile, setIsMobile] = useState(false)

  const getTemplate = (slug) => {
    return templates.find((t) => t.slug === slug)
  }

  useEffect(() => {
    setFocusedSectionSlug(null)
  }, [])

  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent))
  }, [])

  useEffect(() => {
    let currentSlugList = localStorage.getItem('current-slug-list')
    if (
      currentSlugList.indexOf('title-and-description') == -1 &&
      selectedSectionSlugs.indexOf('title-and-description') > -1
    ) {
      selectedSectionSlugs.splice(selectedSectionSlugs.indexOf('title-and-description'), 1)
    }
    setFocusedSectionSlug(localStorage.getItem('current-slug-list').split(',')[0])
    localStorage.setItem('current-slug-list', selectedSectionSlugs)
  }, [selectedSectionSlugs])

  return (
    <>
      {isMobile ? (
        <div className="p-3">
          <div className="bg-white shadow rounded-lg mt-2.5">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="max-w-full text-lg font-medium leading-6 text-center text-gray-900">
                {t('editor-desktop-optimized')}
              </h3>
              <div className="max-w-full mt-2 text-sm text-center text-gray-500">
                <p>{t('editor-visit-desktop')}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-w-[500px]">
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Mali&display=swap"
              rel="stylesheet"
            />
            {/* <script
              data-name="BMC-Widget"
              data-cfasync="false"
              src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
              data-id="katherinecodes"
              data-description="Support me on Buy me a coffee!"
              data-message=""
              data-color="#FFDD00"
              data-position="Right"
              data-x_margin="18"
              data-y_margin="18"
            ></script> */}
          </Head>
          <Nav
            selectedSectionSlugs={selectedSectionSlugs}
            setShowModal={setShowModal}
            getTemplate={getTemplate}
          />
          {showModal && <DownloadModal setShowModal={setShowModal} />}
          <div className="flex p-6">
            <SectionsColumn
              selectedSectionSlugs={selectedSectionSlugs}
              setSelectedSectionSlugs={setSelectedSectionSlugs}
              sectionSlugs={sectionSlugs}
              setSectionSlugs={setSectionSlugs}
              setFocusedSectionSlug={setFocusedSectionSlug}
              focusedSectionSlug={focusedSectionSlug}
              getTemplate={getTemplate}
            />
            <div className="flex flex-1">
              <EditorColumn
                focusedSectionSlug={focusedSectionSlug}
                selectedSectionSlugs={selectedSectionSlugs}
                setSelectedSectionSlugs={setSelectedSectionSlugs}
                templates={templates}
                setTemplates={setTemplates}
              />
              <PreviewColumn
                selectedSectionSlugs={selectedSectionSlugs}
                getTemplate={getTemplate}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  const sectionTemplate = sectionTemplates[locale]
    ? sectionTemplates[locale]
    : sectionTemplates['en']
  const i18n = await serverSideTranslations(locale, ['editor'])
  return {
    props: {
      sectionTemplate,
      ...i18n,
    },
  }
}
