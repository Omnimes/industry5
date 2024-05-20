import Link from "next/link";

type Props = {
    href: string;
    text: string;
}
export const MyLink = ({href, text}: Props) => {
    return (
        <Link href={href} className="hover:text-foreground inline-flex items-center gap-x-1 decoration-2 transition-colors hover:underline">
            {text}
            <svg className="size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
    )
}