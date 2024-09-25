import { MenuIcon, X as CloseMenuIcon } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "../../ui/drawer"
import { buttonVariants } from "../../ui/button"
import { useState } from "react"
import { AdminCard } from "../../AdminCard"
import { ThemeToggler } from "../../ThemeToggler"
import { LogoSmall } from "@/components/LogoSmall"
import { SidenavLists } from "./SidenavLists"

export function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-between">
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
        <DrawerContent className="bg-blue-50 h-full max-w-[60%] rounded-none border-none pl-6 pr-4 py-14">
          <div className="space-y-7">
            <AdminCard className="mb-6" />
            <SidenavLists />
            {/* This component is currently hidden but will be displayed once the theme toggler is ready. */}
            <ThemeToggler className="mt-auto hidden" />
          </div>
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
      <LogoSmall className="size-10" />
    </div>
  )
}
