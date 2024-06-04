'use client'
import { Logo } from "./logo"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "./navigation-menu"
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react";
import { useTranslations } from "next-intl"
import { siteConfig } from "@/data/config/site"

const components: { title: string, description: string, href: string }[] = [
    {
        title: "europe",
        description: "europeDesc",
        href: "/european-union"
    },
    {
        title: "europe-app",
        description: "europeAppDesc",
        href: "/eu-applications"
    },
]

export function NavigationMenuBar() {
    const t = useTranslations("Navbar")
    return (
        <NavigationMenu>
            <NavigationMenuList
                className="hidden md:flex md:space-x-4"
            >
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{t("industry")}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 p-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="from-muted/50 to-muted flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                                        href="/strategy"
                                    >
                                        <Logo withinLink />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            {t("title")}
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            {t("desc")}
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            {siteConfig.subNav.map(item => {
                                return (
                                    <ListItem key={item.title} href={item.href} title={t(item.title)}>
                                        {t(item.desc)}
                                    </ListItem>
                                )
                            })}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{t('europe')}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[500px] gap-3 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem
                                    key={t(component.title)}
                                    title={t(component.title)}
                                    href={component.href}
                                >
                                    {t(component.description)}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                        <NavigationMenuLink
                            className="font-medium"
                        >
                            {t('blog')}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                        <NavigationMenuLink className="font-medium">
                            {t('contact')}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = forwardRef<
    ElementRef<"a">,
    ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="text-muted-foreground line-clamp-3 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"