'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import { ElementRef, useEffect, useRef, useState } from 'react'
import NavItem from './nav-item'
import { useOnClickOutside } from '@/hooks/use-on-click-outside'

function NavItems() {
  const navRef = useRef<ElementRef<'nav'>>(null)
  const [activeIndex, setActiveIndex] = useState<null | number>(null)

  useOnClickOutside(navRef, () => setActiveIndex(null))

  const anyOpen = activeIndex !== null

  function handleOpen(index: number) {
    if (activeIndex === index) {
      return setActiveIndex(null)
    }

    return setActiveIndex(index)
  }

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null)
      }
    }

    document.addEventListener('keydown', handler)

    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <nav className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((productCategory, index) => (
        <NavItem
          key={productCategory.value}
          category={productCategory}
          handleOpen={() => handleOpen(index)}
          isAnyOpen={anyOpen}
          isOpen={activeIndex === index}
        />
      ))}
    </nav>
  )
}

export default NavItems
