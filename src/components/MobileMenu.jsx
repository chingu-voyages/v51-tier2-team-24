import { NavLink } from "react-router-dom"
import { MenuIcon, X as CloseMenuIcon } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { AdminCard } from "./AdminCard"
import { NAV_LINKS } from "@/lib/nav-links"
import { ThemeToggler } from "./ThemeToggler"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerTrigger
        className={buttonVariants({
          className: "!rounded-full active:opacity-50",
          variant: "ghost",
          size: "icon",
        })}
      >
        <DrawerTitle className="sr-only">Open Menu</DrawerTitle>
        <DrawerDescription className="sr-only">
          This is a navigation menu specific for mobile devices
        </DrawerDescription>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent className="h-full max-w-[60%] rounded-none border-none pl-6 pr-4 py-14">
        <AdminCard className="mb-6" />

        <ul className="space-y-4 mb-6">
          {NAV_LINKS.map((NavItem) => (
            <li key={NavItem.path}>
              <NavLink
                className={({ isActive }) =>
                  cn("flex items-center gap-2 capitalize active:opacity-50", {
                    "text-primary": isActive,
                  })
                }
                to={NavItem.path}
                onClick={() => setOpen(false)}
              >
                <NavItem.Icon className="size-5 text-current shrink-0" />
                {NavItem.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <ThemeToggler className="mt-auto hidden" />
        <DrawerClose
          className={buttonVariants({
            className: "absolute right-4 top-4 !rounded-full active:opacity-50",
            variant: "ghost",
            size: "icon",
          })}
        >
          <span className="sr-only">Close Menu</span> <CloseMenuIcon />
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  )
}
