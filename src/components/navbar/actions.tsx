import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "../ui/sheet"
import { siteConfig } from "@/data/config/site"
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle"
import LocaleSwitcher from "../locale/LocaleSwitcher";
import { useTranslations } from "next-intl";
const ActionButtons = () => {
    const t = useTranslations("Navbar");
    const taria = useTranslations("AriaLabel");
    return (
        <>
            <div className="flex gap-1 md:hidden">
                <Sheet>
                    <ThemeToggle />
                    <LocaleSwitcher />
                    <SheetTrigger 
                        aria-label="Menu Open"
                        aria-labelledby="Menu Open"
                        title="Menu Open"
                    >
                        <AlignJustify />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetDescription>
                                <div className="mt-10 flex w-full flex-col items-start space-y-4 text-left text-lg text-black dark:text-white">
                                    {siteConfig.mainNav.map((item, index) => <Link key={index} href={item.href} rel="noreferrer noopener" aria-label={taria("footerAria") + t(item.title)}>{t(item.title)}</Link>)}
                                    <Link href={"/strategy"} aria-label={taria("footerAria") + t("title")} rel="noreferrer noopener">{t("title")}</Link>
                                    {siteConfig.subNav.map((item, index) => <Link key={index} href={item.href} rel="noreferrer noopener" aria-label={taria("footerAria") + t(item.title)}>{t(item.title)}</Link>)}
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="hidden md:flex md:space-x-2">
                <ThemeToggle />
                <LocaleSwitcher />
            </div>
        </>
    );
}

export default ActionButtons;