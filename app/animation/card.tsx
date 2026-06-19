import React from "react";
import {cn} from "@/lib/utils";

function CardHeader({ ...props } :  React.ComponentProps<"div">) {
  return (
    <div data-slot="card-header" className={cn("px-6 py-4")} {...props} />
  )
}

function CardTitle({ ...props } :  React.ComponentProps<"div">) {
  return (
    <div data-slot="card-title" className={cn("text-base font-semibold dark:text-white text-gray-900 ")} {...props} />
  )
}

function CardDescription({ ...props } :  React.ComponentProps<"p">) {
  return (
    <p data-slot="card-description" className={cn("mt-1 text-sm text-gray-400")} {...props} />
  )
}

function CardContent({ ...props } :  React.ComponentProps<"div">) {
  return (
    <div data-slot="card-content" className={cn("flex min-h-40 p-6 outline outline-neutral-200 dark:outline-neutral-800 rounded-t-xl rounded-b-xl items-center justify-center bg-white dark:bg-neutral-900")} {...props} />
  )
}

function CardFooter({ ...props } :  React.ComponentProps<"div">) {
  return (
    <div data-slot="card-footer" className={cn("px-6 py-4")} {...props} />
  )
}

function CardActions({ ...props } :  React.ComponentProps<"div">) {
  return <div data-slot="card-actions" {...props} />
}

function Card({ ...props } : React.ComponentProps<"div">) {
  return (
    <div data-slot="card" className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950"  {...props} />
  )
}

export {
  CardHeader,
  CardTitle,
  CardDescription,
  Card,
  CardContent,
  CardFooter
}
