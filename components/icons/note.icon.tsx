import {SVGProps} from "react";

export const NoteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props}
      xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="1" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"></rect>
      <line x1="4" y1="4.75" x2="9" y2="4.75" stroke="currentColor" strokeWidth="1.5"></line>
      <line x1="4" y1="7.75" x2="12" y2="7.75" stroke="currentColor" strokeWidth="1.5"></line>
      <line x1="4" y1="10.75" x2="12" y2="10.75" stroke="currentColor" strokeWidth="1.5"></line>
    </svg>
  )
}