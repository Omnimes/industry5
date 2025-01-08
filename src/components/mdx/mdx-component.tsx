"use client"

import { ImgHTMLAttributes, useMemo } from "react"
import Image from "next/image"
import { getMDXComponent } from "mdx-bundler/client"

import { CustomCode, Pre } from "./custom-code"
import CustomLink from "./custom-link"

const MDXComponentsMap = {
  a: CustomLink,
  Image,
  img: ({ ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img className="rounded-lg border" {...props} />
  ),
  pre: Pre,
  code: CustomCode,
}

interface MDXComponentProps {
  content: string
  components?: {
    [key: string]: React.ComponentType<unknown>
  }
}

export const MDXComponent = ({ content, components = {} }: MDXComponentProps) => {
  const Component = useMemo(() => getMDXComponent(content), [content])

  return (
    <Component
      components={
        {
          ...MDXComponentsMap,
          ...components,
        } as MDXComponentProps["components"]
      }
    />
  )
}

export default MDXComponent
