import { ReactNode } from "react"

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function OutstaticLayout({ children, params }: Props) {
  return <main>{children}</main>
}
