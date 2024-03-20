import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "../ui/sheet"
import { siteConfig } from "@/config/site"
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle"
import LocaleSwitcher from "../locale/LocaleSwitcher";
import { useTranslations } from "next-intl";
const ActionButtons = () => {

    const t = useTranslations("Navbar");

    return (
        <>
            <div className="flex gap-1 md:hidden">
                <Sheet>
                    <ThemeToggle />
                    <LocaleSwitcher />
                    <SheetTrigger>
                        <AlignJustify />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetDescription>
                                <div className="mt-10 flex w-full flex-col items-start space-y-4 text-lg text-black dark:text-white">
                                    {siteConfig.mainNav.map((item, index) => <Link key={index} href={item.href}>{t(item.title)}</Link>)}
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