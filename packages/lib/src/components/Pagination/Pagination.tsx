import { $, Component, PropsOf, QRL, Signal, component$, useComputed$ } from '@builder.io/qwik'
import { PaginationButton, PaginationButtonProps, PaginationNavigation } from './PaginationButton'
import { IconChevronLeftSolid, IconChevronRightSolid, IconProps } from 'flowbite-qwik-icons'
import { usePaginationClasses } from './composables/use-pagination-classes'

type PaginationProps = PropsOf<'nav'> & {
  currentPage: Signal<number>
  layout?: 'navigation' | 'pagination' | 'table'
  nextLabel?: string
  onPageChange$?: QRL<(page: number) => void>
  previousLabel?: string
  showIcons?: boolean
  totalPages: number
  paginationButton?: Component<PaginationButtonProps>
  nextIcon?: Component<IconProps>
  previousIcon?: Component<IconProps>
}

export const Pagination = component$<PaginationProps>(
  ({
    class: className,
    currentPage,
    layout = 'pagination',
    nextLabel,
    onPageChange$,
    previousLabel,
    nextIcon: NextIcon = IconChevronRightSolid,
    previousIcon: PreviousIcon = IconChevronLeftSolid,
    paginationButton: RenderPaginationButton = PaginationButton,
    showIcons: showIcon = false,
    totalPages,
    ...rest
  }) => {
    const lastPage = useComputed$(() => Math.min(Math.max(layout === 'pagination' ? currentPage.value + 2 : currentPage.value + 4, 5), totalPages))
    const firstPage = useComputed$(() => Math.max(1, lastPage.value - 4))

    const internalNextLabel = useComputed$(() => (!showIcon && !nextLabel ? 'Next' : nextLabel))
    const internalPreviousLabel = useComputed$(() => (!showIcon && !previousLabel ? 'Previous' : previousLabel))

    const goToNextPage$ = $(() => {
      const page = currentPage.value + 1
      currentPage.value = page
      onPageChange$?.(page)
    })

    const goToPreviousPage$ = $(() => {
      const page = Math.max(currentPage.value - 1, 1)
      currentPage.value = page
      onPageChange$?.(page)
    })

    const displayedPages = useComputed$(() => {
      if (firstPage.value >= lastPage.value) return []

      return [...Array(lastPage.value - firstPage.value + 1).keys()].map((key: number): number => key + firstPage.value)
    })

    const { tableSpanClasses, previousNavigationClasses, nextNavigationClasses, iconClasses } = usePaginationClasses(useComputed$(() => showIcon))

    return (
      <nav class={[className]} {...rest}>
        {layout === 'table' && (
          <div class="text-sm text-gray-700 dark:text-gray-400">
            Showing <span class={tableSpanClasses.value}>{firstPage}</span> to&nbsp;
            <span class={tableSpanClasses.value}>{lastPage}</span> of&nbsp;
            <span class={tableSpanClasses.value}>{totalPages}</span> Entries
          </div>
        )}
        <ul class="xs:mt-0 mt-2 inline-flex items-center -space-x-px">
          <li>
            <PaginationNavigation class={previousNavigationClasses.value} onClick$={goToPreviousPage$} disabled={currentPage.value === 1}>
              {showIcon && <PreviousIcon aria-hidden class={iconClasses.value} />}
              {internalPreviousLabel.value}
            </PaginationNavigation>
          </li>
          {layout === 'pagination' &&
            displayedPages.value.map((page: number) => (
              <li aria-current={page === currentPage.value ? 'page' : undefined} key={page}>
                <RenderPaginationButton
                  active={page === currentPage.value}
                  onClick$={() => {
                    currentPage.value = page
                    onPageChange$?.(page)
                  }}
                >
                  {page}
                </RenderPaginationButton>
              </li>
            ))}
          <li>
            <PaginationNavigation class={nextNavigationClasses.value} onClick$={goToNextPage$} disabled={currentPage.value === totalPages}>
              {internalNextLabel.value}
              {showIcon && <NextIcon aria-hidden class={iconClasses.value} />}
            </PaginationNavigation>
          </li>
        </ul>
      </nav>
    )
  },
)
