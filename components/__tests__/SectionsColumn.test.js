import { render } from '@testing-library/react'

import { SectionsColumn } from '../SectionsColumn'

import { en_EN } from '../../data/section-templates-en_EN'

jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: jest.fn() }),
}))

describe('<SectionsColumn />', () => {
  const props = {
    selectedSectionSlugs: ['title-and-description'],
    setSelectedSectionSlugs: () => ['title-and-description', 'api'],
    sectionSlugs: ['api', 'appendix'],
    setSectionSlugs: () => ['api', 'appendix'].filter((s) => s !== 'api'),
    focusedSectionSlug: 'title-and-description',
    setFocusedSectionSlug: jest.fn(),
    getTemplate: (slug) => en_EN.find((t) => t.slug === slug),
  }

  it('should render', () => {
    const { container } = render(<SectionsColumn {...props} />)
    expect(container).toBeInTheDocument()
  })
})
