import {SVGProps} from "react";

export const PersonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="4" r="3" stroke="currentColor" strokeWidth="1.5"></circle>
      <path
        d="M2 15C2 13.4087 2.63214 11.8826 3.75736 10.7574C4.88258 9.63214 6.4087 9 8 9C9.59129 9 11.1174 9.63214 12.2426 10.7574C13.3679 11.8826 14 13.4087 14 15"
        stroke="currentColor" strokeWidth="1.5"></path>
    </svg>
  )
}