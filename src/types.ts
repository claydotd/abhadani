export interface PortfolioItem {
  title: string
  date: string
  publisher: string
  quote?: string
  imageUrl?: string
  url?: string
  featured: boolean
}

export type CategoryId =
  | 'reportage'
  | 'features'
  | 'investigations'
  | 'opinion-analysis'
  | 'reviews'

export interface Category {
  id: CategoryId
  label: string
  items: PortfolioItem[]
}

export interface SiteConfig {
  name: string
  tagline: string
  bio: string
  email: string
  twitter?: string
  linkedin?: string
}
