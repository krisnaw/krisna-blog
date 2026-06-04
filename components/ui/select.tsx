"use client"

import * as React from "react"
import { Select } from "@base-ui/react/select"
import { cn } from "@/lib/utils"
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from "lucide-react"

function SelectRoot(props: React.ComponentProps<typeof Select.Root>) {
  return <Select.Root data-slot="select" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof Select.Trigger> & { size?: "sm" | "default" }) {
  return (
    <Select.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive data-[placeholder]:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 dark:bg-input/30 dark:hover:bg-input/50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <Select.Icon>
        <ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />
      </Select.Icon>
    </Select.Trigger>
  )
}

function SelectValue(props: React.ComponentProps<typeof Select.Value>) {
  return <Select.Value data-slot="select-value" {...props} />
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof Select.Popup> & { position?: "popper" | "item-aligned" }) {
  return (
    <Select.Portal>
      <Select.Positioner>
        <Select.Popup
          data-slot="select-content"
          className={cn(
            "relative z-50 max-h-96 min-w-32 overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10",
            className
          )}
          {...props}
        >
          <Select.ScrollUpArrow>
            <ChevronUpIcon className="size-4" />
          </Select.ScrollUpArrow>
          {children}
          <Select.ScrollDownArrow>
            <ChevronDownIcon className="size-4" />
          </Select.ScrollDownArrow>
        </Select.Popup>
      </Select.Positioner>
    </Select.Portal>
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Select.Item>) {
  return (
    <Select.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <Select.ItemIndicator>
          <CheckIcon className="size-4" />
        </Select.ItemIndicator>
      </span>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  )
}

function SelectGroup(props: React.ComponentProps<typeof Select.Group>) {
  return <Select.Group data-slot="select-group" className="scroll-my-1 p-1" {...props} />
}

function SelectLabel(props: React.ComponentProps<typeof Select.GroupLabel>) {
  return (
    <Select.GroupLabel
      data-slot="select-label"
      className="px-2 py-1.5 text-xs font-medium text-muted-foreground"
      {...props}
    />
  )
}

function SelectSeparator({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="select-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

export {
  SelectRoot as Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
}
