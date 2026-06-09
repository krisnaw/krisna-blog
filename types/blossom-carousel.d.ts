declare module '@blossom-carousel/react' {
  import type { ReactNode, HTMLAttributes, RefObject } from 'react'

  interface BlossomCarouselProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode
    as?: keyof HTMLElementTagNameMap
    ref?: RefObject<HTMLElement>
    onOverscroll?: (event: CustomEvent<{ left: number }>) => void
  }

  export function BlossomCarousel(props: BlossomCarouselProps): JSX.Element
}
