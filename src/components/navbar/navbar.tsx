import ActionButtons from "./actions";
import Logo from "./logo";
import { NavigationMenuBar } from "./navigation-bar";

export const Navbar = () => {
    return (<header className="bg-background sticky top-0 z-40 flex justify-center border-b">
        <nav className=" flex h-16 w-full max-w-screen-lg items-center justify-between px-4 lg:px-0">
            <Logo />
            <NavigationMenuBar />
            <ActionButtons />
        </nav>
    </header>);
}