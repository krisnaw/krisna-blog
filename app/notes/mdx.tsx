import Link from 'next/link'
import Image from 'next/image'
import {MDXRemote, type MDXRemoteProps} from 'next-mdx-remote/rsc'
import {highlight} from 'sugar-high'
import React from 'react'

type TableData = {
  headers: string[]
  rows: string[][]
}

type TableProps = {
  data: TableData
}

const Table: React.FC<TableProps> = ({data}) => {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

type AnchorProps = React.ComponentPropsWithoutRef<'a'> & {href: string}

const CustomLink: React.FC<AnchorProps> = (props) => {
  const {href, children, ...rest} = props

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}

type RoundedImageProps = Omit<React.ComponentProps<typeof Image>, 'alt'> & {
  alt: string
}

const RoundedImage: React.FC<RoundedImageProps> = ({className, ...props}) => {
  const mergedClassName = ['rounded-lg', className]
    .filter((value): value is string => Boolean(value))
    .join(' ')
  return <Image className={mergedClassName} {...props} />
}

type CodeProps = React.ComponentPropsWithoutRef<'code'> & {children: string}

const Code: React.FC<CodeProps> = ({children, ...props}) => {
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{__html: codeHTML}} {...props} />
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading: React.FC<React.PropsWithChildren> = ({children}) => {
    const text = React.Children.toArray(children)
      .map((child) => (typeof child === 'string' ? child : ''))
      .join('')
    const slug = slugify(text)
    return React.createElement(
      `h${level}`,
      {id: slug},
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
} satisfies NonNullable<MDXRemoteProps['components']>

type CustomMDXProps = MDXRemoteProps & {
  components?: MDXRemoteProps['components']
}

export function CustomMDX(props: CustomMDXProps) {
  const combinedComponents: NonNullable<MDXRemoteProps['components']> = {
    ...components,
    ...(props.components ?? {}),
  }

  return (
    <MDXRemote
      {...props}
      components={combinedComponents}
    />
  )
}
