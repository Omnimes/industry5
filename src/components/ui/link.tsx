import Link from "next/link"
import clsx from "clsx"

type Props = {
  children?: React.ReactNode
  href: string
  text?: string
  className?: string
}
export const MyLink = ({ href, text, className, ...props }: Props) => {
  return (
    <Link
      href={href}
      rel="noreferrer noopener"
      {...props}
      className={clsx(
        "inline-flex items-center gap-x-1 decoration-2 transition-colors hover:text-foreground hover:underline",
        className
      )}
    >
      {text}
      <svg
        className="size-4 shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </Link>
  )
}

export const MyLinkChildren = ({ children, href, className, ...props }: Props) => {
  return (
    <Link
      href={href}
      rel="noreferrer noopener"
      {...props}
      className={clsx(
        "inline-flex items-center gap-x-1 decoration-2 transition-colors hover:text-foreground",
        className
      )}
    >
      {children}
    </Link>
  )
}
