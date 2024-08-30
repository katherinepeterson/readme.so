import ReactMarkdown from 'react-markdown'

import { TAB } from '../utils/constants'
import RawPreview from './RawPreview'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const gfm = require('remark-gfm')
export const PreviewColumn = ({ selectedSectionSlugs, getTemplate, selectedTab, darkMode }) => {
  selectedSectionSlugs = [...new Set(selectedSectionSlugs)]
  const markdown = selectedSectionSlugs.reduce((acc, section) => {
    const template = getTemplate(section)
    if (template) {
      return `${acc}${template.markdown}`
    } else {
      return acc
    }
  }, ``)

  const showPreview = selectedTab === TAB.PREVIEW
  return (
    <div
      className={`h-full preview-width md:w-auto border border-gray-500 rounded-md p-6 preview bg-white dark:bg-black full-screen 
      overflow-x-scroll md:overflow-x-auto ${
        showPreview ? 'overflow-y-scroll' : 'overflow-hidden'
      }`}
    >
      {showPreview ? (
        <ReactMarkdown
          plugins={[gfm]}
          children={markdown}
          renderers={{
            link: (props) => (
              <a href={props.href} target="_blank">
                {props.children}
              </a>
            ),
            code: ({ language, value, darkMode }) => (
              <SyntaxHighlighter
                style={darkMode ? oneDark : oneLight}
                language={language}
                children={value}
              />
            ),
          }}
        />
      ) : (
        <RawPreview text={markdown} />
      )}
    </div>
  )
}
