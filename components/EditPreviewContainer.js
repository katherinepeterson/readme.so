import { useState, useEffect } from 'react'
import { PreviewColumn } from '../components/PreviewColumn'
import { EditorColumn } from '../components/EditorColumn'
import ColumnHeader from '../components/ColumnHeader'
import { useTranslation } from 'next-i18next'
import { TAB } from '../utils/constants'
import Tabs from './Tabs'
import useDeviceDetect from '../hooks/useDeviceDetect'

const EditPreviewContainer = ({
  templates,
  setTemplates,
  getTemplate,
  focusedSectionSlug,
  selectedSectionSlugs,
  setSelectedSectionSlugs,
  darkMode,
}) => {
  const { t } = useTranslation('editor')
  const [toggleState, setToggleState] = useState({ theme: 'dark', img: 'toggle_sun.svg' })
  const [selectedTab, setSelectedTab] = useState(TAB.PREVIEW)
  const { isMobile } = useDeviceDetect()

  useEffect(() => {
    setSelectedTab(isMobile ? TAB.EDITOR : TAB.PREVIEW)
  }, [isMobile])

  const showEditorColumn = !isMobile || selectedTab === TAB.EDITOR
  const showPreviewColumn = !isMobile || selectedTab === TAB.PREVIEW || selectedTab === TAB.RAW
  return (
    <div className="flex flex-1 pt-6 px-6 md:p-0 flex-col md:flex-row">
      {isMobile ? (
        <Tabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          focusedSectionSlug={focusedSectionSlug}
          toggleState={toggleState}
          toggleTheme={() => setDarkMode(!darkMode)}
        />
      ) : null}

      {showEditorColumn ? (
        <div className="w-full md:w-1/2 px-3 full-screen">
          {!isMobile ? (
            <ColumnHeader.Heading>{t('editor-column-editor')}</ColumnHeader.Heading>
          ) : null}
          <EditorColumn
            focusedSectionSlug={focusedSectionSlug}
            selectedSectionSlugs={selectedSectionSlugs}
            setSelectedSectionSlugs={setSelectedSectionSlugs}
            templates={templates}
            setTemplates={setTemplates}
            theme="vs-dark"
          />
        </div>
      ) : null}

      {showPreviewColumn ? (
        <div className="px-3 flex-1">
          {!isMobile ? (
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <ColumnHeader.Tab
                  isActive={selectedTab === TAB.PREVIEW}
                  className="pb-3"
                  onClick={() => setSelectedTab(TAB.PREVIEW)}
                >
                  {t('preview-column-preview')}
                </ColumnHeader.Tab>
                <ColumnHeader.Tab
                  isActive={selectedTab === TAB.RAW}
                  className="pb-3"
                  onClick={() => setSelectedTab(TAB.RAW)}
                >
                  {t('preview-column-raw')}
                </ColumnHeader.Tab>
              </nav>
            </div>
          ) : null}
          <PreviewColumn
            selectedSectionSlugs={selectedSectionSlugs}
            getTemplate={getTemplate}
            selectedTab={selectedTab}
            darkMode={darkMode}
          />
        </div>
      ) : null}
    </div>
  )
}

const toggleDarkMode = (toggleState, setToggleState) => {
  if (toggleState.theme == 'dark') {
    setToggleState({ theme: 'light', img: 'toggle_moon.svg' })
    localStorage.setItem('color-theme', 'light')
  } else {
    setToggleState({ theme: 'dark', img: 'toggle_sun.svg' })
    localStorage.setItem('color-theme', 'dark')
  }
}

export default EditPreviewContainer
