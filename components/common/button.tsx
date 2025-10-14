import clsx from "clsx";

const baseStyle = {
  default: "group inline-flex items-center gap-x-1.5 px-2.5 py-1.5 text-xs font-semibold",
  primary: " text-white hover:bg-blue-700",
}

const variantStyles = {
  default: "bg-blue-600",
  primary: "bg-pink-600",
}

type Props = (
  | { variant?: "default" | "primary"}
) & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({...props}: Props) {
  props.variant ??= "default"
  const className = clsx(
    baseStyle[props.variant],
    variantStyles[props.variant]
  )
  return (
    <button className={className} {...props} />
  )
}