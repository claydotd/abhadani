import { useMemo } from 'react'
import { useParams, Navigate, NavLink } from 'react-router-dom'
import WorkCard from '../components/WorkCard'
import { categories } from '../data/content'
import type { CategoryId } from '../types'

const categoryIds = categories.map((c) => c.id)

export default function SelectedWork() {
  const { categoryId } = useParams<{ categoryId?: string }>()

  if (categoryId && !categoryIds.includes(categoryId as CategoryId)) {
    return <Navigate to="/work" replace />
  }

  const activeCategory = useMemo(() => {
    if (!categoryId) return undefined
    return categories.find((c) => c.id === categoryId)
  }, [categoryId])

  const items = useMemo(() => {
    if (!categoryId) {
      return categories.flatMap((c) =>
        c.items.map((item) => ({ item, categoryLabel: c.label }))
      )
    }
    return (activeCategory?.items ?? []).map((item) => ({
      item,
      categoryLabel: activeCategory?.label,
    }))
  }, [categoryId, activeCategory])

  return (
    <div className="container page">
      <h1>Selected Work</h1>
      <nav className="category-nav" aria-label="Work categories">
        <NavLink
          to="/work"
          end
          className={({ isActive }) =>
            isActive ? 'category-tab category-tab--active' : 'category-tab'
          }
        >
          All Work
          <span className="category-count">
            {categories.reduce((sum, c) => sum + c.items.length, 0)}
          </span>
        </NavLink>
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/work/${category.id}`}
            className={({ isActive }) =>
              isActive ? 'category-tab category-tab--active' : 'category-tab'
            }
          >
            {category.label}
            <span className="category-count">{category.items.length}</span>
          </NavLink>
        ))}
      </nav>
      {items.length === 0 ? (
        <p className="empty-state">No work in this category yet.</p>
      ) : (
        <div className="work-list">
          {items.map(({ item, categoryLabel }) => (
            <WorkCard
              key={item.title}
              item={item}
              category={categoryLabel}
              showCategory={!categoryId}
              showImage={false}
            />
          ))}
        </div>
      )}
    </div>
  )
}