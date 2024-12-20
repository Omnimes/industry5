import { MotionProps as OriginalMotionProps } from "framer-motion"

declare module "rehype-citation" {
  const rehypeCitation: any
  export default rehypeCitation
}
declare module "remark-html"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

type Posts = {
  posts: Post[]
}

type Post = {
  title: string
  description: string
  publishedAt: string
  status: string
  coverImage: string
  slug: string
}

declare module "framer-motion" {
  interface MotionProps extends OriginalMotionProps {
    className?: string
  }
}
