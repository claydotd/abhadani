import reportage from '../../content/reportage.json'
import features from '../../content/features.json'
import investigations from '../../content/investigations.json'
import opinionAnalysis from '../../content/opinion-analysis.json'
import reviews from '../../content/reviews.json'
import siteConfig from '../../content/site.json'
import copywriting from '../../content/copywriting.json'
import editorial from '../../content/editorial.json'

import type { Category, CategoryId, PortfolioItem, SiteConfig } from '../types'

export const site: SiteConfig = siteConfig

export const categories: Category[] = [
  { id: 'reportage', label: 'Reportage', items: reportage as PortfolioItem[] },
  { id: 'features', label: 'Features', items: features as PortfolioItem[] },
  {
    id: 'investigations',
    label: 'Investigations',
    items: investigations as PortfolioItem[],
  },
  {
    id: 'opinion-analysis',
    label: 'Opinion / Analysis',
    items: opinionAnalysis as PortfolioItem[],
  },
  { id: 'reviews', label: 'Reviews', items: reviews as PortfolioItem[] },
]

export function getCategory(id: CategoryId): Category | undefined {
  return categories.find((c) => c.id === id)
}

export function getFeaturedItems(): (PortfolioItem & { category: string })[] {
  return categories.flatMap((category) =>
    category.items
      .filter((item) => item.featured)
      .map((item) => ({ ...item, category: category.label })),
  )
}

export function getAllItems(): (PortfolioItem & {
  category: string
  categoryId: CategoryId
})[] {
  return categories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.label,
      categoryId: category.id,
    })),
  )
}

export function getCopywritingItems(): PortfolioItem[] {
  return copywriting as PortfolioItem[]
}

export function getEditorialItems(): PortfolioItem[] {
  return editorial as PortfolioItem[]
}