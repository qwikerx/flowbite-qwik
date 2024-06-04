export function position(el: Element | null) {
  if (!el) {
    return { top: 0, left: 0 }
  }

  const rect = el.getBoundingClientRect()
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft
  const scrollTop = window.scrollY || document.documentElement.scrollTop

  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

const SCROLL_OFFSET = 16
export function scrollTo(selector: string) {
  const element = document.querySelector(selector)
  if (!element) return

  const headerHeight = document.querySelector('#header__navbar')?.clientHeight ?? 0

  window.scrollTo({
    top: position(element).top - headerHeight - SCROLL_OFFSET,
    left: 0,
    behavior: 'smooth',
  })
}
