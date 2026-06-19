export const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]

export const stagger = {
  hidden: {},
  show: {transition: {staggerChildren: 0.07, delayChildren: 0.05}},
}

export const fadeUp = {
  hidden: {opacity: 0, y: 10, filter: "blur(4px)"},
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {duration: 0.45, ease: EASE_OUT},
  },
}
