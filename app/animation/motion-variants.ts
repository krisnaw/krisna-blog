export const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]

export const stagger = {
  hidden: {},
  show: {transition: {staggerChildren: 0.07, delayChildren: 0.05}},
}

export const fadeUp = {
  hidden: {opacity: 0, transform: "translateY(8px)", filter: "blur(2px)"},
  show: {
    opacity: 1,
    transform: "translateY(0px)",
    filter: "blur(0px)",
    transition: {duration: 0.24, ease: EASE_OUT},
  },
}
