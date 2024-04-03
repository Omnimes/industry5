declare module 'rehype-citation' {
  const rehypeCitation: any;
  export default rehypeCitation;
}

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

type Meta = {
  id: string,
  title: string,
  description: string,
  date: string,
  tags: string,
  image: string,
  authors: AuthorObject,
}

type BlogPost = {
  meta: Meta,
  content: ReactElement<any, string | JSXElementConstructor<any>>,
}

type AuthorObject = {
  meta: AuthorMeta,
  content: ReactElement<any, string | JSXElementConstructor<any>>,
}[]

type AuthorMeta = {
  linkedin: any;
  name: string,
  avatar: string,
  occupation: string,
  company: string,
}

